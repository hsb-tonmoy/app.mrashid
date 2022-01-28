<script>
	import Button from './Button.svelte';
	export let FormComponentRef;

	import { firstname, lastname, email, phone, social_media } from '$lib/home/stores.js';
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
				bind:value={$firstname}
			/>
			<label
				for="firstname"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>First name</label
			>
		</span>
		<span class="relative w-2/4">
			<input
				id="lastname"
				name="lastname"
				type="text"
				class="peer h-10 w-full bg-transparent border-b-2 border-thinAccent text-base lg:text-xl font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
				placeholder="Last name"
				bind:value={$lastname}
			/>
			<label
				for="lastname"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Last name</label
			>
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
				bind:value={$phone}
			/>
			<label
				for="phone"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Phone no.</label
			>
		</span>
		<span class="relative w-full lg:w-2/4 mt-16 lg:mt-0">
			<input
				id="email"
				name="email"
				type="text"
				class="peer h-10 w-full bg-transparent border-b-2 border-thinAccent text-base lg:text-xl font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
				placeholder="Email address"
				bind:value={$email}
			/>
			<label
				for="email"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Email address</label
			>
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
				bind:value={$social_media}
			/>
			<label
				for="email"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Facebook ID</label
			>
		</span>
	</div>
</fieldset>

<Button {FormComponentRef} disabledButton={false} />

<style lang="postcss">
	small {
		@apply text-red-700;
	}
</style>
