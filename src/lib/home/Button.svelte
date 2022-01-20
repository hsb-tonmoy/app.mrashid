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

<div class="buttons flex lg:justify-between mt-12">
	{#if !firstStep}
		<button
			on:click|preventDefault={handlePrevious}
			class="relative px-8 lg:px-12 py-3 lg:py-4 ml-2 lg:ml-0 bg-accent1 hover:bg-accent2 disabled:bg-thinAccent text-white font-light text-sm uppercase rounded"
			type="button">Previous</button
		>
	{/if}
	<button
		on:click|preventDefault={handleNext}
		class="relative px-8 lg:px-12 py-3 lg:py-4 ml-2 lg:ml-0 bg-accent1 hover:bg-accent2 disabled:bg-thinAccent text-white font-light text-sm uppercase rounded"
		disabled={disabledButton}
		type="button">Next</button
	>
</div>
