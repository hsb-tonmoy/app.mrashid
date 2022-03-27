import * as api from '$lib/api.js';

export async function get({ locals }) {
	const pre_application_form = await api.get(
		`pre_application_form/${locals.user.student_id}/`,
		locals.access
	);

	if (pre_application_form.detail === 'Not found.') {
		return {
			ok: false,
			body: { pre_application_form }
		};
	}

	return {
		ok: true,
		body: { pre_application_form }
	};
}
