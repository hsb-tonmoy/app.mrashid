import * as cookie from 'cookie';
import jwt_decode from 'jwt-decode';
import * as api from '$lib/api';

const getJWTExp = (token) => {
	const { exp } = jwt_decode(token);

	return exp;
};

export async function handle({ event, resolve }) {
	let newAccess = '';

	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const user = cookies.user && Buffer.from(cookies.user, 'base64').toString('utf-8');
	event.locals.user = user ? JSON.parse(user) : null;

	if (event.request || (user && !cookies.access)) {
		const { access } = await api.post('auth/token/refresh', { refresh: cookies.refresh });

		newAccess = access;
	}

	const response = await resolve(event);

	if (newAccess) {
		response.headers.set(
			'set-cookie',
			`access=${newAccess}; Path=/; Expires=${new Date(getJWTExp(newAccess) * 1000)}; HttpOnly`
		);
	}

	return response;
}

export function getSession({ locals }) {
	return {
		user: locals.user && {
			id: locals.user.pk,
			email: locals.user.email,
			first_name: locals.user.first_name,
			last_name: locals.user.last_name
		}
	};
}
