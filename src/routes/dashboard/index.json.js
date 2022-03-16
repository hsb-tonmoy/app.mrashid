import * as api from '$lib/api.js';

export async function get({ locals }) {
	const summary = await api.get(`student_data/${locals.user.student_id}/`, locals.access);
	const notes = await api.get(`note/?student=${locals.user.student_id}`, locals.access);

	if (summary.detail === 'Not found.') {
		return {
			status: 404,
			ok: false
		};
	}

	return {
		ok: true,
		body: {
			summary,
			notes
		}
	};
}
