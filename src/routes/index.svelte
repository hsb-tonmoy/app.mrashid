<script>
	import Form from '$lib/multistep-form/MasterForm.svelte';
	import Step from '$lib/multistep-form/StepForm.svelte';
	import { currentStep } from '$lib/multistep-form/stores.js';
	import Step1 from '$lib/home/Step1.svelte';
	import Step2 from '$lib/home/Step2.svelte';
	import Step3 from '$lib/home/Step3.svelte';
	import Step4 from '$lib/home/Step4.svelte';

	import { destination, degree, user, major } from '$lib/svg/form-icons.js';

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
			},
			{
				title: 'Personal Info',
				icon: user
			},
			{
				title: 'Area of Study',
				icon: major
			}
		]
	};

	$: separator_width = `width: ${100 / (multiStepOptions.stepsDescription.length - 1)}%`;

	function handleStepClick(index) {
		if ($currentStep < index) {
			FormComponentRef.previousStep();
		}
	}
</script>

<main class="bg-lightBodyBackground">
	<div class="flex flex-col w-full max-w-screen-2xl mx-auto px-6 lg:px-8 2xl:px-0">
		<header
			class="flex flex-col lg:flex-row justify-between items-center py-4 lg:py-8 mb-32 md:mb-0"
		>
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
		<section class="body flex flex-col md:justify-center">
			<Form {multiStepOptions} bind:this={FormComponentRef}>
				<Step>
					<Step1 {FormComponentRef} />
				</Step>
				<Step>
					<Step2 {FormComponentRef} />
				</Step>
				<Step>
					<Step3 {FormComponentRef} />
				</Step>
				<Step>
					<Step4 {FormComponentRef} />
				</Step>
			</Form>
		</section>
	</div>
	<footer
		class="hidden md:flex items-center gap-x-8 bottom-0 left-0 bg-white w-full px-6 lg:px-12 2xl:px-16 border-b-8 border-thinAccent"
	>
		{#each multiStepOptions.stepsDescription as step, index}
			<span
				on:click={() => handleStepClick(index)}
				class:step-active={$currentStep === index}
				class:step-done={$currentStep > index}
				class="relative w-12 h-12 text-gray-500 rounded-xl transition ease-in-out duration-300 cursor-pointer"
			>
				{@html step.icon}
			</span>
			<hr
				class:step-done={$currentStep > index}
				class="border-dotted border-1 border-accent1 opacity-80 transition ease-in-out duration-500"
				style={separator_width}
			/>
		{/each}
	</footer>
</main>

<style lang="postcss">
	:root {
		--header-height: 8vh;
		--footer-height: 7vh;
	}

	header {
		height: var(--header-height);
	}

	.body {
		height: calc(100vh - var(--header-height) - var(--footer-height));
	}

	footer {
		height: var(--footer-height);
		box-shadow: 1px -5px 100px 0px rgba(99, 71, 194, 0.2);
	}

	:global(.step-active) {
		@apply text-white bg-accent1 shadow-2xl shadow-accent1 translate-y-[-3vh] scale-95 lg:scale-105 xl:scale-125;
		box-shadow: 1px 5px 30px 0px rgba(99, 71, 194, 0.5);
	}

	:global(.step-done) {
		@apply text-accent1 border-solid border-accent1 opacity-100;
	}

	hr:last-child {
		display: none;
	}
</style>
