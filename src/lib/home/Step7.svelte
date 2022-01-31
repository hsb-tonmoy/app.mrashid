<script>
	import Button from './Button.svelte';
	export let FormComponentRef;

	import { message } from '$lib/home/stores.js';
</script>

<h2
	class="animate__animated animate__slideInLeft text-xl lg:text-5xl text-lightText font-semibold drop-shadow"
	style="--animate-duration: 800ms"
>
	Do you want to add something?
</h2>
<div
	class="animate__animated animate__slideInLeft flex items-center gap-x-3 mt-2 ml-2"
	style="--animate-duration: 1000ms"
>
	<span><hr class="w-6 lg:w-10 border-[1.5px] border-lightText" /></span>
	<p class="text-lightTextBody text-sm lg:text-base drop-shadow-sm">
		Tell us something that's not reflected in the form
	</p>
</div>
<img
	src="/images/home-ill-personal.svg"
	alt="fly-illustration"
	class="animate__animated animate__zoomInRight hidden md:block absolute bottom-[8vh] right-0 object-cover w-[200px] lg:w-[350px] xl:w-[550px] z-0"
	style="--animate-duration: 1000ms"
/>

<fieldset class="mt-16">
	<span class="w-full">
		<textarea
			id="message"
			name="message"
			class="form-textarea h-52 py-4 w-full bg-transparent border-b-2 border-thinAccent text-base lg:text-xl font-medium text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
			placeholder="Tell us what you think"
			bind:value={$message}
		/>
	</span>
</fieldset>

<!-- <Button {FormComponentRef} disabledButton={!$personalForm.valid} /> -->
<Button {FormComponentRef} submit={true} disabledButton={false} />
