<script>
	import { onDestroy, onMount } from 'svelte';
	import { fly, fade, slide } from 'svelte/transition';
	const options = [
		{ name: "Bachelor's" },
		{ name: "Master's" },
		{ name: 'Associate' },
		{ name: 'Doctoral' },
		{ name: 'Other' }
	];

	export let degree;

	let ready = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<h2
		in:fly={{ x: -200, duration: 1000 }}
		class="text-xl lg:text-5xl text-lightText font-semibold drop-shadow"
	>
		What degree do you wish to pursue?
	</h2>
	<div in:fly={{ x: -200, duration: 1400 }} class="flex items-center gap-x-3 mt-2 ml-2">
		<span><hr class="w-6 lg:w-10 border-[1.5px] border-lightText" /></span>
		<p class="text-lightTextBody text-sm lg:text-base drop-shadow-sm">
			Choose your intended degree
		</p>
	</div>
	<img
		in:slide={{ duration: 1200 }}
		src="/images/home-ill-1.png"
		alt="fly-illustration"
		class="absolute bottom-0 right-0 object-cover w-[200px] lg:w-[450px] xl:w-[550px] z-0"
	/>

	<fieldset
		class="flex flex-wrap gap-x-2 gap-y-2 lg:gap-y-0 lg:gap-x-4 text-sm text-accent2 font-normal mt-8 lg:mt-16"
	>
		{#each options as option, index}
			<label
				in:fly={{ y: 200, duration: 1500 + 200 * index }}
				class="relative appearance-none cursor-pointer"
			>
				<input
					class="appearance-none"
					type="radio"
					bind:group={degree}
					name="destination"
					value={option.name}
				/>
				<span class="flex flex-col gap-y-3">{option.name}</span>
			</label>
		{/each}
	</fieldset>
{/if}

<style lang="postcss">
	[type='radio'] + span {
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
