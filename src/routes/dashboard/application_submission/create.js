import * as api from '$lib/api.js';

export async function post({ locals, request }) {
	const body = await request.json();

	const res = await api.post(`pre_application_form/`, body, locals.access);

	if (res.detail) {
		return {
			status: 400,
			ok: false
		};
	}

	return {
		status: 200,
		ok: true,
		body: res
	};
}
