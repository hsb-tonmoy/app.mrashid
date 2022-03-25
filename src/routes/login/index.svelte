<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils.js';

	import { notificationToast } from '$lib/NotificationToast';

	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	import { login_message } from '$lib/layout/stores';

	import SocialLogin from '$lib/login/SocialLogin.svelte';

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
		const response = await post(`auth/login`, { email, password });

		if (
			response.non_field_errors &&
			response.non_field_errors[0] == 'Unable to log in with provided credentials.'
		) {
			notificationToast('Your email or password is incorrect. Please try again', true, 10000);
		}

		if (response.user) {
			$session.user = response.user;
			goto('/dashboard');
		}
	}
</script>

<svelte:head>
	<title>app.mrashid.net - Login</title>
</svelte:head>

<main class="flex flex-wrap h-screen font-montserrat">
	<aside class="bg bg-cover bg-center bg-no-repeat w-full py-32 lg:py-0 xl:w-3/5" />
	<aside
		class="flex flex-col items-center 2xl:items-start justify-center w-full p-6 lg:p-0 xl:p-6 2xl:p-0 xl:w-2/5"
	>
		<h2
			class="text-2xl lg:text-3xl xl:text-xl 2xl:text-3xl text-lightText font-semibold leading-loose"
		>
			Hello, <br /> Here's the door to your dashboard!
		</h2>

		<div
			id="login"
			class="flex flex-col w-full md:w-2/4 xl:w-3/4 2xl:w-2/4 mt-12 md:mt-20 xl:mt-12 2xl:mt-20"
		>
			<SocialLogin />
			{#if $login_message.type === 'error'}
				<div class="errors mt-12">
					<span class="text-red-600 text-sm text-center font-medium">{$login_message.message}</span>
				</div>
			{/if}
			{#if $login_message.type === 'success'}
				<div class="errors mt-12">
					<span class="text-green-600 text-sm text-center font-medium"
						>{$login_message.message}</span
					>
				</div>
			{/if}
			<div
				class="relative w-full flex justify-center items-center border-b-2 border-gray-200 my-12"
			>
				<span class="absolute px-2 bg-white text-gray-400">Or</span>
			</div>
			<form on:submit|preventDefault={handleSubmit}>
				<fieldset class="flex flex-col mt-5">
					<div class="flex flex-col gap-y-8">
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
						</label>
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
					</div>
					<a href="#" class="self-end text-sm mt-2 mb-8 text-lightText hover:text-black"
						>Forgot password?</a
					>
					<button
						class="px-6 lg:px-12 py-2 lg:py-4 ml-2 lg:ml-0 bg-accent1 hover:bg-accent2 disabled:bg-thinAccent text-white font-light text-sm uppercase"
						disabled={!$isValid || !($state.modified.email && $state.modified.password)}
						>Login</button
					>
					<span class="self-center text-xs md:text-sm mt-4 text-gray-600"
						>Don't have an account? Go ahead and <a
							href="/register"
							class="font-medium text-lightText hover:underline">Sign-up</a
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
