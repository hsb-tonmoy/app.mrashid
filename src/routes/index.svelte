<script>
	import Form from '$lib/multistep-form/MasterForm.svelte';
	import Step from '$lib/multistep-form/StepForm.svelte';
	import Button from '$lib/home/Button.svelte';
	import { selections } from '$lib/home/stores.js';
	import { currentStep } from '$lib/multistep-form/stores.js';
	import Step1 from '$lib/home/Step1.svelte';
	import Step2 from '$lib/home/Step2.svelte';

	import { destination, degree } from '$lib/svg/form-icons.js';

	let FormComponentRef;

	let multiStepOptions = {
		stepsDescription: [
			{
				title: 'Destination',
				icon: destination
			},
			{
				title: 'Degree',
				icon: degree
			}
		]
	};
</script>

<main class="bg-lightBodyBackground">
	<div class="flex flex-col w-full max-w-screen-xl mx-auto px-6 lg:px-8 2xl:px-0">
		<header class="flex flex-col lg:flex-row justify-between items-center py-4 lg:py-8">
			<div id="logo">
				<a href="/" class="text-accent2 font-medium text-lg lg:text-xl">app.mrashid.net</a>
			</div>
			<div id="promotion" class="flex items-center gap-x-2">
				<img
					src="/images/play-button.png"
					alt="play button"
					class="w-8 h-8 animate__animated animate__headShake animate__slow animate__infinite"
				/>
				<span class="text-sm lg:text-base text-accent2 opacity-70"
					>Hear from Dr. Rashid himself</span
				>
				<img
					class="cta-arrow absolute top-[7%] lg:top-[3%] w-20 h-20 lg:w-32 lg:h-32"
					src="/images/pointing-arrow.svg"
					alt="pointing arrow"
				/>
			</div>
		</header>
		<section class="body flex flex-col justify-center">
			<Form {multiStepOptions} bind:this={FormComponentRef}>
				<Step>
					<Step1 bind:destination={$selections.destination} />

					<Button
						firstStep="true"
						{FormComponentRef}
						disabledButton={$selections.destination.length === 0}
					/>
				</Step>
				<Step>
					<Step2 bind:degree={$selections.degree} />

					<Button {FormComponentRef} disabledButton={$selections.degree.length === 0} />
				</Step>
			</Form>
		</section>
	</div>
	<footer
		class="relative flex items-center gap-x-8 bottom-0 left-0 bg-white w-full px-6 lg:px-12 2xl:px-16 border-b-8 border-thinAccent"
	>
		{#each multiStepOptions.stepsDescription as step, index}
			<span
				class:step-active={$currentStep === index}
				class:step-done={$currentStep > index}
				class="w-10 h-10 text-gray-500"
			>
				{@html step.icon}
			</span>
			<hr
				class:step-done={$currentStep > index}
				class="w-[12.5%] border-dotted border-[1.5px] border-gray-300"
			/>
		{/each}
	</footer>
</main>

<style lang="postcss">
	:root {
		--header-height: 8vh;
	}

	header {
		height: var(--header-height);
	}

	.body {
		height: calc(100vh - 2 * var(--header-height));
	}

	footer {
		height: var(--header-height);
		box-shadow: 1px -1px -35px 0 rgba(198, 211, 255, 0.9);
	}

	:global(.step-active) {
		@apply text-white bg-accent1 shadow-2xl shadow-accent1;
	}

	:global(.step-done) {
		@apply text-accent1 border-solid border-accent1;
	}
</style>
