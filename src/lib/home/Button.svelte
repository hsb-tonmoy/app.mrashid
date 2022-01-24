<script>
	export let firstStep = false,
		FormComponentRef,
		disabledButton = true;

	function handlePrevious() {
		FormComponentRef.previousStep();
	}

	function handleNext() {
		FormComponentRef.nextStep();
	}
</script>

<div class="buttons flex gap-x-2 lg:justify-end mt-12">
	{#if !firstStep}
		<button
			on:click|preventDefault={handlePrevious}
			class="relative px-4 lg:px-8 py-3 lg:py-4 ml-2 lg:ml-0 bg-gray-300 hover:bg-gray-400 transition-all ease-in-out hover:bg-accent2 disabled:bg-thinAccent text-zinc-700 hover:text-gray-100 font-light text-sm uppercase rounded"
			type="button"
			><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M7 16l-4-4m0 0l4-4m-4 4h18"
				/>
			</svg></button
		>
	{/if}
	<button
		on:click|preventDefault={handleNext}
		class="relative px-8 lg:px-24 py-3 lg:py-4 ml-2 lg:ml-0 bg-accent1 hover:bg-accent2 disabled:bg-thinAccent text-white font-light text-sm uppercase rounded"
		disabled={disabledButton}
		type="button">Next Step</button
	>
</div>
