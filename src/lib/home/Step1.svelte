<script>
	export let FormComponentRef;
	import Button from './Button.svelte';

	import { destination } from '$lib/home/stores.js';

	let destination_data = [''];

	$: $destination = destination_data.join(', ');

	const options = [
		{ name: 'United States', icon: 'usa' },
		{ name: 'Canada', icon: 'canada' },
		{ name: 'United Kingdom', icon: 'uk' },
		{ name: 'Australia', icon: 'aus' },
		{ name: 'Other', icon: 'other' }
	];
</script>

<h2
	class="animate__animated animate__slideInLeft text-xl lg:text-5xl text-lightText font-semibold drop-shadow"
	style="--animate-duration: 800ms"
>
	Where do you wish to go?
</h2>

<div
	class="animate__animated animate__slideInLeft flex items-center gap-x-3 mt-2 ml-2"
	style="--animate-duration: 1000ms"
>
	<span><hr class="w-6 lg:w-10 border-[1.5px] border-lightText" /></span>
	<p class="text-lightTextBody text-sm lg:text-base drop-shadow-sm">
		Choose your desired destination
	</p>
</div>

<img
	src="/images/home-ill-destination.png"
	alt="fly-illustration"
	class="animate__animated animate__zoomInRight absolute bottom-[8vh] right-0 object-cover w-[200px] xl:w-[450px] 2xl:w-[550px] z-0"
	style="--animate-duration: 1000ms"
/>

<fieldset
	class="flex flex-wrap gap-x-2 gap-y-2 lg:gap-y-0 lg:gap-x-4 text-sm text-accent2 font-normal mt-8 lg:mt-16"
>
	{#each options as option, index}
		<label
			class="animate__animated animate__fadeInUp relative appearance-none cursor-pointer"
			style={`--animate-duration: ${1000 + 200 * index}ms`}
		>
			<input
				class="appearance-none opacity-0"
				type="checkbox"
				bind:group={destination_data}
				name="destination"
				value={option.name}
			/>
			<span class="flex flex-col gap-y-3"
				><img class="w-8 h-8" src={`/images/flags/${option.icon}.svg`} alt="USA" />
				{option.name}</span
			>
		</label>
	{/each}
</fieldset>
<Button firstStep="true" {FormComponentRef} disabledButton={destination_data.length === 0} />

<style lang="postcss">
	[type='checkbox'] + span {
		@apply inline-flex justify-center items-center min-w-[7.5rem] h-[8rem] lg:min-w-[9.375rem] lg:h-[8.75rem] border rounded-lg transition ease-in-out delay-150;
		border-color: rgba(62, 52, 200, 0.1);
		box-shadow: 1px 1px 35px 0 rgba(198, 211, 255, 0.28);
	}

	:checked + span {
		background-color: rgb(241, 255, 249);
		border-color: rgb(54, 179, 126);
		@apply scale-105;
	}
</style>
