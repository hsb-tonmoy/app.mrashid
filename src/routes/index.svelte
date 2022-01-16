<script>
	import Form from '$lib/multistep-form/MasterForm.svelte';
	import Step from '$lib/multistep-form/StepForm.svelte';
	import Button from '$lib/home/Button.svelte';
	import { selections } from '$lib/home/stores.js';
	import Step1 from '$lib/home/Step1.svelte';
	import Step2 from '$lib/home/Step2.svelte';

	let FormComponentRef;

	let multiStepOptions = {
		stepsDescription: [
			{
				title: 'Destination',
				icon: 'All the details to perform on this step'
			},
			{
				title: 'Degree',
				icon: 'All the details to perform on this step'
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
</main>

<style>
	:root {
		--header-height: 8vh;
	}

	header {
		height: var(--header-height);
	}

	.body {
		height: calc(100vh - var(--header-height));
	}
</style>
