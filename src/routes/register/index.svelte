<script>
	import { google, facebook } from '$lib/svg/home';
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
			handleRegister(
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

	async function handleRegister(first_name, last_name, email, password, passwordConfirmation) {
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

		if (
			response.email &&
			response.email[0] === 'A user is already registered with this e-mail address.'
		) {
			notificationToast('duplicate');
		} else {
			notificationToast('error');
			console.log(response);
		}
	}
</script>

<main class="flex flex-wrap h-screen font-montserrat">
	<aside class="bg bg-cover bg-center bg-no-repeat w-full py-32 lg:py-0 xl:w-3/5" />
	<aside
		class="flex flex-col items-center 2xl:items-start justify-center w-full p-6 lg:p-0 xl:p-6 2xl:p-0 xl:w-2/5"
	>
		<h2
			class="text-2xl lg:text-3xl xl:text-xl 2xl:text-3xl text-lightText font-semibold leading-loose"
		>
			Hello, <br /> Let's grab the key to your dashboard!
		</h2>

		<div
			id="login"
			class="flex flex-col w-full md:w-2/4 xl:w-3/4 	 mt-12 md:mt-20 xl:mt-12 2xl:mt-20"
		>
			<div id="socials" class="flex gap-x-6">
				<a
					href="#"
					class="flex gap-x-4 w-60 h-12 items-center text-white text-sm bg-[#4267B2] px-4 text-center rounded shadow-lg hover:shadow transition-all ease-in-out duration-200"
					><span class="block text-white w-4 h-4">{@html facebook}</span>Sign-up with Facebook</a
				>
				<a
					href="#"
					class="flex items-center h-12 bg-white text-sm px-4 text-center border border-gray-200 rounded shadow-lg hover:shadow transition-all ease-in-out duration-200"
					><span class="block w-6 h-6">{@html google}</span></a
				>
			</div>
			<div
				class="relative w-full flex justify-center items-center border-b-2 border-gray-200 my-12"
			>
				<span class="absolute px-2 bg-white text-gray-400">Or</span>
			</div>
			<form on:submit|preventDefault={handleSubmit}>
				<fieldset class="flex flex-col mt-5">
					<div class="flex flex-col gap-y-8">
						<div class="flex gap-x-4">
							<span class="w-2/4">
								<label class="block">
									<span class="text-lightText">First name</span>
									<input
										type="text"
										name="first_name"
										id="first_name"
										class="form-input
									mt-1
									block
									w-full
									rounded-md
									border-gray-300
									shadow-sm
									focus:border-accent2 focus:ring focus:ring-accent2 focus:ring-opacity-50
								"
										bind:value={$form.first_name}
										on:change={handleChange}
									/>
								</label>
							</span>
							<span class="w-2/4">
								<label class="block">
									<span class="text-lightText">Last name</span>
									<input
										type="text"
										name="last_name"
										id="last_name"
										class="form-input
									mt-1
									block
									w-full
									rounded-md
									border-gray-300
									shadow-sm
									focus:border-accent2 focus:ring focus:ring-accent2 focus:ring-opacity-50
								"
										bind:value={$form.last_name}
										on:change={handleChange}
									/>
								</label>
							</span>
						</div>
						<label class="block">
							<span class="text-lightText">Email</span>
							<input
								type="email"
								name="email"
								id="email"
								class="form-input
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-accent2 focus:ring focus:ring-accent2 focus:ring-opacity-50
            "
								bind:value={$form.email}
								on:change={handleChange}
							/>
							<span class="text-xs text-orange-600"
								>Make sure to use the same email address you used in the form!</span
							>
						</label>
						<div class="flex gap-x-4">
							<span class="w-2/4">
								<label class="block">
									<span class="text-lightText">Password</span>
									<input
										type="password"
										name="password"
										id="password"
										class="form-input
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-accent2 focus:ring focus:ring-accent2 focus:ring-opacity-50
            "
										bind:value={$form.password}
										on:change={handleChange}
									/>
								</label>
							</span>
							<span class="w-2/4">
								<label class="block">
									<span class="text-lightText">Password confirmation</span>
									<input
										type="password"
										name="passwordConfirmation"
										id="passwordConfirmation"
										class="form-input
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-accent2 focus:ring focus:ring-accent2 focus:ring-opacity-50
            "
										bind:value={$form.passwordConfirmation}
										on:change={handleChange}
									/>
								</label>
							</span>
						</div>
					</div>

					<button
						class="mt-8 px-6 lg:px-12 py-2 lg:py-4 ml-2 lg:ml-0 bg-accent1 hover:bg-accent2 disabled:bg-thinAccent text-white font-light text-sm uppercase"
						disabled={!$isValid ||
							!(
								$state.modified.first_name &&
								$state.modified.last_name &&
								$state.modified.email &&
								$state.modified.password &&
								$state.modified.passwordConfirmation
							)}>Register</button
					>
					<span class="self-center text-xs md:text-sm mt-4 text-gray-600"
						>Already have an account? Go ahead and <a
							href="/login"
							class="font-medium text-lightText hover:underline">Sign-in</a
						></span
					>
				</fieldset>
			</form>
		</div>
	</aside>
</main>

<style>
	.bg {
		background-image: url('/images/login-bg.svg');
	}
</style>
