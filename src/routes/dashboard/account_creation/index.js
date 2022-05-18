import * as api from '$lib/api.js';

export async function get({ locals }) {
	const data = await api.get(`student_data/${locals.user.student_id}/`, locals.access);

	if (data.detail === 'Not found.') {
		return {
			status: 404,
			ok: false
		};
	}

	return {
		ok: true,
		body: {
			data
		}
	};
}
