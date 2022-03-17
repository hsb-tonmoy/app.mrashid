import * as api from '$lib/api.js';

export async function get({ locals }) {
	const document_category = await api.get(`document_category/`, locals.access);
	const document = await api.get(`document/?student_data=${locals.user.student_id}`, locals.access);

	if (document.detail === 'Not found.') {
		return {
			status: 404,
			ok: false
		};
	}

	return {
		ok: true,
		body: {
			document_category,
			document
		}
	};
}
