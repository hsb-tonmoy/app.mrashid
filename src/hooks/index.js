import * as cookie from 'cookie';

export async function handle({ event, resolve }) {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const user = cookies.user && Buffer.from(cookies.user, 'base64').toString('utf-8');
	event.locals.user = user ? JSON.parse(user) : null;
	return await resolve(event);
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
