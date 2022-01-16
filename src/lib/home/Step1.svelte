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

<fieldset class="flex gap-x-4 text-sm font-normal mt-6">
	{#each options as option}
		<label
			class="inline-flex justify-center items-center min-w-[9.375rem] h-[8.75rem] border border-accent1"
		>
			<input
				class="appearance-none"
				type="checkbox"
				bind:group={selected}
				name="destination"
				value={option}
			/>
			{option}
		</label>
	{/each}
</fieldset>
