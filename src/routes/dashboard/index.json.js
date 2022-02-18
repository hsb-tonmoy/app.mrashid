import * as api from '$lib/api.js';

export async function get({ locals }) {
	const body = await api.get(`student_data/${locals.user.username}`, locals.access);

	return {
		body
	};
}
