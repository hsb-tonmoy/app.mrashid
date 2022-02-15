<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return {
				status: 302,
				redirect: '/'
			};
		}

		return {};
	}
</script>

<script>
	import { goto } from '$app/navigation';

	import { post } from '$lib/utils.js';
	import { firstname, lastname, email } from '$lib/home/stores';

	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	import Toastify from 'toastify-js';
	import 'toastify-js/src/toastify.css';

	const { form, state, isValid, handleChange, handleSubmit } = createForm({
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
		}),
		onSubmit: (values) => {
			handleLogin(
				values.first_name,
				values.last_name,
				values.email,
				values.password,
				values.passwordConfirmation
			);
		}
	});

	function notificationToast(status) {
		Toastify({
			text:
				status === 'duplicate'
					? 'You are already registered with this email address.'
					: 'Something went wrong, please try again later',
			close: false,
			duration: 5000,
			gravity: 'top',
			position: 'center',
			offset: {
				x: 0,
				y: 60
			},
			style: {
				background: 'linear-gradient(to right, #d90429, #ef233c)'
			}
		}).showToast();
	}

	async function handleLogin(first_name, last_name, email, password, passwordConfirmation) {
		const response = await post(`auth/register`, {
			first_name,
			last_name,
			email,
			password,
			passwordConfirmation
		});

		if (response.user) {
			goto('/confirmation');
		}

		if (response.email[0] === 'A user is already registered with this e-mail address.') {
			notificationToast('duplicate');
		} else {
			notificationToast('error');
			console.log(response);
		}
	}
</script>

<div
	class="login-page flex flex-col justify-center items-center w-full max-w-screen-xl mx-auto mt-16 px-6 lg:px-8 2xl:px-0"
>
	<h2
		class="text-xl lg:text-5xl text-lightText font-semibold drop-shadow"
		style="--animate-duration: 800ms"
	>
		Sign-up to see your dashboard
	</h2>
	<div class="flex items-center gap-x-3 mt-2 ml-2" style="--animate-duration: 1000ms" />
	<form on:submit|preventDefault={handleSubmit}>
		<fieldset class="mt-10">
			<div class="flex flex-col gap-y-8">
				<span class="relative w-2/4">
					<input
						id="first_name"
						name="first_name"
						type="text"
						class="peer h-10 w-80 bg-transparent border-b-2 border-thinAccent text-base lg:text-lg font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
						placeholder="First name"
						bind:value={$form.first_name}
						on:change={handleChange}
					/>
					<label
						for="first_name"
						class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
						>First name</label
					>
				</span>
				<span class="relative w-2/4">
					<input
						id="last_name"
						name="last_name"
						type="last_name"
						class="peer h-10 w-80 bg-transparent border-b-2 border-thinAccent text-base lg:text-lg font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
						placeholder="Last name"
						bind:value={$form.last_name}
						on:change={handleChange}
					/>
					<label
						for="last_name"
						class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
						>Last name</label
					>
				</span>
				<span class="relative w-2/4">
					<input
						id="email"
						name="email"
						type="text"
						class="peer h-10 w-80 bg-transparent border-b-2 border-thinAccent text-base lg:text-lg font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
						placeholder="Email address"
						bind:value={$form.email}
						on:change={handleChange}
					/>
					<label
						for="email"
						class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
						>Email address</label
					>
				</span>
				<span class="relative w-2/4">
					<input
						id="password"
						name="password"
						type="password"
						class="peer h-10 w-80 bg-transparent border-b-2 border-thinAccent text-base lg:text-lg font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
						placeholder="Email address"
						bind:value={$form.password}
						on:change={handleChange}
					/>
					<label
						for="password"
						class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
						>Password</label
					>
				</span>
				<span class="relative w-2/4">
					<input
						id="passwordConfirmation"
						name="passwordConfirmation"
						type="password"
						class="peer h-10 w-80 bg-transparent border-b-2 border-thinAccent text-base lg:text-lg font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
						placeholder="Confirm Password"
						bind:value={$form.passwordConfirmation}
						on:change={handleChange}
					/>
					<label
						for="passwordConfirmation"
						class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
						>Confirm Password</label
					>
				</span>
				<button
					class="px-6 lg:px-12 py-2 lg:py-4 ml-2 lg:ml-0 bg-accent1 hover:bg-accent2 disabled:bg-thinAccent text-white font-light text-sm uppercase"
					disabled={!$isValid ||
						!(
							$state.modified.first_name &&
							$state.modified.last_name &&
							$state.modified.email &&
							$state.modified.password &&
							$state.modified.passwordConfirmation
						)}>Register</button
				>
			</div>
		</fieldset>
	</form>
</div>

<style lang="postcss">
	@media screen(lg) {
		.login-page {
			height: calc(100vh - var(--header-height));
		}
	}
</style>
