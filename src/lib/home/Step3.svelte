<script>
	import { firstname, lastname, email, phone, social_media } from './stores';

	import Button from './Button.svelte';

	export let FormComponentRef;

	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	const phoneRegex =
		/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

	const { form, errors, state, isValid, touched, handleChange, handleSubmit } = createForm({
		initialValues: {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			facebook: ''
		},
		validationSchema: yup.object().shape({
			firstname: yup.string().required('First name is required').trim(),
			lastname: yup.string().required('Last name is required').trim(),
			email: yup.string().email().required('Email address is required').trim(),
			phone: yup
				.string()
				.matches(phoneRegex, 'Not a valid phone number')
				.required('Phone number is required')
				.trim(),
			facebook: yup.string().trim()
		}),
		onSubmit: (values) => {
			$firstname = values.firstname;
			$lastname = values.lastname;
			$email = values.email;
			$phone = values.phone;
			$social_media = values.facebook;
		}
	});
</script>

<h2
	class="animate__animated animate__slideInLeft text-xl lg:text-5xl text-lightText font-semibold drop-shadow"
	style="--animate-duration: 800ms"
>
	Please enter your information to continue
</h2>
<div
	class="animate__animated animate__slideInLeft flex items-center gap-x-3 mt-2 ml-2"
	style="--animate-duration: 1000ms"
>
	<span><hr class="w-6 lg:w-10 border-[1.5px] border-lightText" /></span>
	<p class="text-lightTextBody text-sm lg:text-base drop-shadow-sm">
		This will help us serve you better
	</p>
</div>
<img
	src="/images/home-ill-personal.svg"
	alt="fly-illustration"
	class="animate__animated animate__zoomInRight hidden md:block absolute bottom-[8vh] right-0 object-cover w-[200px] lg:w-[350px] xl:w-[550px] z-0"
	style="--animate-duration: 1000ms"
/>

<fieldset class="mt-16">
	<div class="flex gap-x-8">
		<span class="relative w-2/4">
			<input
				id="firstname"
				name="firstname"
				type="text"
				class="peer h-10 w-full bg-transparent border-b-2 border-thinAccent text-base lg:text-xl font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
				placeholder="First name"
				bind:value={$form.firstname}
				on:change={handleChange}
			/>
			<label
				for="firstname"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>First name</label
			>
			{#if $errors.firstname && $touched.firstname}
				<small>{$errors.firstname}</small>
			{/if}
		</span>
		<span class="relative w-2/4">
			<input
				id="lastname"
				name="lastname"
				type="text"
				class="peer h-10 w-full bg-transparent border-b-2 border-thinAccent text-base lg:text-xl font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
				placeholder="Last name"
				bind:value={$form.lastname}
				on:change={handleChange}
			/>
			<label
				for="lastname"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Last name</label
			>
			{#if $errors.lastname && $touched.lastname}
				<small>{$errors.lastname}</small>
			{/if}
		</span>
	</div>
	<div class="flex flex-wrap lg:flex-nowrap gap-x-8 mt-16">
		<span class="relative w-full lg:w-2/4">
			<input
				id="phone"
				name="phone"
				type="text"
				class="peer h-10 w-full bg-transparent border-b-2 border-thinAccent text-base lg:text-xl font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
				placeholder="Phone no."
				bind:value={$form.phone}
				on:change={handleChange}
			/>
			<label
				for="phone"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Phone no.</label
			>
			{#if $errors.phone && $touched.phone}
				<small>{$errors.phone}</small>
			{/if}
		</span>
		<span class="relative w-full lg:w-2/4 mt-16 lg:mt-0">
			<input
				id="email"
				name="email"
				type="text"
				class="peer h-10 w-full bg-transparent border-b-2 border-thinAccent text-base lg:text-xl font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
				placeholder="Email address"
				bind:value={$form.email}
				on:change={handleChange}
			/>
			<label
				for="email"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Email address</label
			>
			{#if $errors.email && $touched.email}
				<small>{$errors.email}</small>
			{/if}
		</span>
	</div>
	<div class="flex gap-x-8 mt-16">
		<span class="relative w-full xl:w-2/4">
			<input
				id="facebook"
				name="facebook"
				type="text"
				class="peer h-10 w-full bg-transparent border-b-2 border-thinAccent text-base lg:text-xl font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
				placeholder="Facebook ID"
				bind:value={$form.facebook}
				on:change={handleChange}
			/>
			<label
				for="facebook"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Facebook ID</label
			>
			{#if $errors.facebook && $touched.facebook}
				<small>{$errors.facebook}</small>
			{/if}
		</span>
	</div>
</fieldset>

<Button
	{FormComponentRef}
	on:submit={handleSubmit}
	disabledButton={!$isValid ||
		!(
			$state.modified.firstname &&
			$state.modified.lastname &&
			$state.modified.email &&
			$state.modified.phone
		)}
/>

<style lang="postcss">
	small {
		@apply text-red-700;
	}
</style>
