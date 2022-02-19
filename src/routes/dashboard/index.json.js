import * as api from '$lib/api.js';

export async function get({ locals }) {
	const body = await api.get(`student_data/${locals.user.username}`, locals.access);

	if (body.detail === 'Not found.') {
		return {
			status: 404,
			ok: false
		};
	}

	return {
		ok: true,
		body
	};
}
