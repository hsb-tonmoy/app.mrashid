import * as api from '$lib/api';

export async function patch({ locals, request }) {
	const body = await request.json();

	const res = await api.patch(
		`pre_application_form/${locals.user.student_id}/`,
		body,
		locals.access
	);

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
