<script>
	import { form, field } from 'svelte-forms';
	import { required, pattern, email, url } from 'svelte-forms/validators';

	import Button from './Button.svelte';
	export let FormComponentRef;

	const firstname = field('firstname', '', [required(), pattern(/^[a-z ,.'-]+$/i)], {
		valid: false
	});
	const lastname = field('lastname', '', [required(), pattern(/^[a-z ,.'-]+$/i)], {
		valid: false
	});
	const email_address = field('email', '', [required(), email()], {
		valid: false
	});
	const phone = field('phone', '', [required(), pattern(/\d+/)], {
		valid: false
	});
	const facebook = field('facebook', '', [required(), url()], {
		valid: false
	});

	const personalForm = form(firstname, lastname, email_address, phone, facebook);
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
	class="animate__animated animate__zoomInRight absolute bottom-[8vh] right-0 object-cover w-[200px] lg:w-[350px] xl:w-[550px] z-0"
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
				bind:value={$firstname.value}
			/>
			<label
				for="firstname"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>First name</label
			>
			{#if $personalForm.hasError('firstname.required')}
				<small>First name is required</small>
			{:else if $personalForm.hasError('firstname.pattern')}
				<small>First name must be a string</small>
			{/if}
		</span>
		<span class="relative w-2/4">
			<input
				id="lastname"
				name="lastname"
				type="text"
				class="peer h-10 w-full bg-transparent border-b-2 border-thinAccent text-base lg:text-xl font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
				placeholder="Last name"
				bind:value={$lastname.value}
			/>
			<label
				for="lastname"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Last name</label
			>
			{#if $personalForm.hasError('lastname.required')}
				<small>Last name is required</small>
			{:else if $personalForm.hasError('lastname.pattern')}
				<small>Last name must be a string</small>
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
				bind:value={$phone.value}
			/>
			<label
				for="phone"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Phone no.</label
			>
			{#if $personalForm.hasError('phone.required')}
				<small>Phone no. is required</small>
			{:else if $personalForm.hasError('phone.pattern')}
				<small>Please enter a valid phone no.</small>
			{/if}
		</span>
		<span class="relative w-full lg:w-2/4 mt-16 lg:mt-0">
			<input
				id="email"
				name="email"
				type="text"
				class="peer h-10 w-full bg-transparent border-b-2 border-thinAccent text-base lg:text-xl font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
				placeholder="Email address"
				bind:value={$email_address.value}
			/>
			<label
				for="email"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Email address</label
			>
			{#if $personalForm.hasError('email_address.required')}
				<small>Email address is required</small>
			{:else if $personalForm.hasError('email.not_an_email')}
				<small>Please enter a valid email address</small>
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
				bind:value={$facebook.value}
			/>
			<label
				for="email"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Facebook ID</label
			>
			{#if $personalForm.hasError('facebook.required')}
				<small>Facebook ID is required</small>
			{:else if $personalForm.hasError('facebook.url')}
				<small>Please enter a valid Facebook ID</small>
			{/if}
		</span>
	</div>
</fieldset>

<Button {FormComponentRef} disabledButton={!$personalForm.valid} />

<style lang="postcss">
	small {
		@apply text-red-700;
	}
</style>
