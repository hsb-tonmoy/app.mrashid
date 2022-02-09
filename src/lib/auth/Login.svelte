<script>
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	const { form, state, isValid, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: yup.object().shape({
			email: yup
				.string()
				.email('Please enter a valid e-mail address')
				.required('Email address is required')
				.trim(),
			password: yup.string().required('Password is required')
		}),
		onSubmit: (values) => {
			handleLogin(values.email, values.password);
		}
	});

	async function handleLogin(email, password) {
		try {
			const res = await fetch('/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email,
					password
				})
			});
			if (res.ok) {
				console.log('OK');
			}
		} catch (err) {
			console.log(err);
		}
	}
</script>
