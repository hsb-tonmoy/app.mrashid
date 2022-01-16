<script>
	import { slide } from 'svelte/transition';

	const options = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Other'];

	let selected = ['United States'];
</script>

<h2 class="lg:text-5xl text-lightText font-semibold drop-shadow">Where do you wish to go?</h2>
<div class="flex items-center gap-x-3 mt-2">
	<span><hr class="w-10 border-[1.5px] border-lightText" /></span>
	<p class="text-lightTextBody drop-shadow-sm">Choose your desired destination</p>
</div>
<img
	src="/images/home-ill-1.png"
	alt="fly-illustration"
	class="absolute bottom-0 right-0 object-cover w-[300px] lg:w-[550px] z-0"
/>

<fieldset class="flex gap-x-4 text-sm text-accent2 font-normal mt-16">
	{#each options as option}
		<label class="relative appearance-none cursor-pointer">
			<input
				class="appearance-none"
				type="checkbox"
				bind:group={selected}
				name="destination"
				value={option}
			/>
			<span>{option}</span>
		</label>
	{/each}
</fieldset>

<style lang="postcss">
	[type='checkbox'] + span {
		@apply inline-flex justify-center items-center min-w-[9.375rem] h-[8.75rem] border rounded-lg transition ease-in-out delay-150;
		border-color: rgba(62, 52, 200, 0.1);
		box-shadow: 1px 1px 35px 0 rgba(198, 211, 255, 0.28);
	}

	:checked + span {
		background-color: rgba(120, 57, 243, 0.1);
		@apply -translate-y-1 scale-110;
	}
</style>
