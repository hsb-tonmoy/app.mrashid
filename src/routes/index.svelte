<script>
	import { video } from '$lib/svg/home.js';
	import Form from '$lib/multistep-form/MasterForm.svelte';
	import Step from '$lib/multistep-form/StepForm.svelte';
	import Step1 from '$lib/home/Step1.svelte';

	let FormComponentRef;
	let resetSteps = false;

	let multiStepOptions = {
		formTitle: 'New Title ✍️',
		formSubtitle: 'Subtitle should be here',
		stepsDescription: [
			{ title: 'Destination', icon: 'All the details to perform on this step' },
			{ title: 'Degree', icon: 'Skip if input equals to next' },
			{ title: 'Language', icon: 'All the details to perform on this step' }
		]
	};
</script>

<main class="bg-lightBodyBackground">
	<div class="flex flex-col w-full max-w-screen-xl mx-auto">
		<header class="flex justify-between items-center py-8">
			<div id="logo">
				<a href="/" class="text-accent2 font-medium text-xl">app.mrashid.net</a>
			</div>
			<div id="promotion" class="flex items-center gap-x-2">
				<span class="text-accent1">{@html video}</span>
				<span class="text-base text-accent2 opacity-70">Hear from Dr. Rashid himself</span>
			</div>
		</header>
		<section class="body flex flex-col justify-center">
			<Step1 />
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
