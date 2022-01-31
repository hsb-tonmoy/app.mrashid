<script>
	import Button from './Button.svelte';
	import { degree } from '$lib/home/stores.js';
	const options = [
		{ name: 'Undergraduate' },
		{ name: "Master's" },
		{ name: 'PhD' },
		{ name: 'Other' }
	];
	export let FormComponentRef;
</script>

<h2
	class="animate__animated animate__slideInLeft text-xl lg:text-5xl text-lightText font-semibold drop-shadow"
	style="--animate-duration: 800ms"
>
	What degree do you wish to pursue?
</h2>
<div
	class="animate__animated animate__slideInLeft flex items-center gap-x-3 mt-2 ml-2"
	style="--animate-duration: 1000ms"
>
	<span><hr class="w-6 lg:w-10 border-[1.5px] border-lightText" /></span>
	<p class="text-lightTextBody text-sm lg:text-base drop-shadow-sm">Choose your intended degree</p>
</div>
<img
	src="/images/home-ill-degree.svg"
	alt="fly-illustration"
	class="animate__animated animate__zoomInRight absolute bottom-[1vh] lg:bottom-[8vh] right-0 object-cover w-[200px] lg:w-[350px] xl:w-[550px] z-0"
	style="--animate-duration: 1000ms"
/>

<fieldset
	class="flex flex-wrap gap-x-2 gap-y-2 lg:gap-y-0 lg:gap-x-4 text-sm text-accent2 font-normal mt-8 lg:mt-16"
>
	{#each options as option, index}
		<label
			class="animate__animated animate__fadeInLeftBig relative appearance-none cursor-pointer"
			style={`--animate-duration: ${1000 + 100 * index}ms`}
		>
			<input
				class="appearance-none opacity-0"
				type="radio"
				bind:group={$degree}
				name="destination"
				value={option.name}
			/>
			<span class="flex flex-col gap-y-3">{option.name}</span>
		</label>
	{/each}
</fieldset>
<Button {FormComponentRef} disabledButton={!$degree} />

<style lang="postcss">
	[type='radio'] + span {
		@apply inline-flex justify-center items-center min-w-[7.5rem] h-[8rem] lg:min-w-[9.375rem] lg:h-[8.75rem] border focus:border-red-700 rounded-lg transition ease-in-out delay-150;
		border-color: rgba(62, 52, 200, 0.1);
		box-shadow: 1px 1px 35px 0 rgba(198, 211, 255, 0.28);
	}

	:checked + span {
		background-color: rgb(241, 255, 249);
		border-color: rgb(54, 179, 126);
		@apply scale-105;
	}
</style>
