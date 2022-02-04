<script>
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	import { firstname, lastname, email } from '../home/stores';

	const { form, errors, state, isValid, touched, handleChange, handleSubmit } = createForm({
		initialValues: {
			first_name: $firstname,
			last_name: $lastname,
			email: $email,
			password: '',
			passwordConfirmation: ''
		},
		validationSchema: yup.object().shape({
			first_name: yup.string().required('First name is required').trim(),
			last_name: yup.string().required('Last name is required').trim(),
			email: yup.string().email().required('Email address is required').trim(),
			password: yup.string().required('Password is required'),
			passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
		})
	});
</script>
