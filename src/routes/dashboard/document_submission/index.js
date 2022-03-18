const API_URL = import.meta.env.VITE_API_URL;

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

export async function post({ locals, request }) {
	const body = await request.formData();

	const res = await api.post(`document/`, body, locals.access, true);

	if (res.error) {
		return {
			status: 400,
			ok: false,
			body: res
		};
	}

	return {
		status: 200,
		ok: true,
		body: res
	};
}
