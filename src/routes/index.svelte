<script>
	import Form from '$lib/multistep-form/MasterForm.svelte';
	import Step from '$lib/multistep-form/StepForm.svelte';
	import { currentStep } from '$lib/multistep-form/stores.js';
	import Step1 from '$lib/home/Step1.svelte';
	import Step2 from '$lib/home/Step2.svelte';
	import Step3 from '$lib/home/Step3.svelte';
	import Step4 from '$lib/home/Step4.svelte';
	import Step5 from '$lib/home/Step5.svelte';
	import Step6 from '$lib/home/Step6.svelte';
	import Step7 from '$lib/home/Step7.svelte';
	import Step8 from '$lib/home/Step8.svelte';

	import {
		destination,
		degree,
		user,
		major,
		credentials,
		ielts,
		message,
		success
	} from '$lib/svg/form-icons.js';

	let FormComponentRef;

	let multiStepOptions = {
		stepsDescription: [
			{
				title: 'Destination',
				component: Step1,
				icon: destination
			},
			{
				title: 'Degree',
				component: Step2,
				icon: degree
			},
			{
				title: 'Personal Info',
				component: Step3,
				icon: user
			},
			{
				title: 'Area of Study',
				component: Step4,
				icon: major
			},
			{
				title: 'Credentials',
				component: Step5,
				icon: credentials
			},
			{
				title: 'IELTS',
				component: Step6,
				icon: ielts
			},
			{
				title: 'Message',
				component: Step7,
				icon: message
			},
			{
				title: 'Success',
				component: Step8,
				icon: success
			}
		]
	};

	$: separator_width = `width: ${100 / (multiStepOptions.stepsDescription.length - 1)}%`;
</script>

<div class="flex flex-col w-full max-w-screen-2xl mx-auto px-6 lg:px-8 2xl:px-0">
	<section class="body flex flex-col md:justify-center">
		<Form bind:this={FormComponentRef}>
			{#each multiStepOptions.stepsDescription as step}
				<Step>
					<svelte:component this={step.component} {FormComponentRef} />
				</Step>
			{/each}
		</Form>
	</section>
</div>
<section
	class="footer hidden lg:flex items-center gap-x-8 bottom-0 left-0 bg-white w-full px-6 lg:px-12 2xl:px-16"
>
	{#each multiStepOptions.stepsDescription as step, index}
		<span
			class:step-active={$currentStep === index}
			class:step-done={$currentStep > index}
			class="relative flex w-16 h-14 text-gray-500 rounded-xl transition ease-in-out duration-300 cursor-pointer"
		>
			{@html step.icon}
		</span>
		<hr
			class:step-done={$currentStep > index}
			class="border-dotted border-1 border-accent1 opacity-80 transition ease-in-out duration-500"
			style={separator_width}
		/>
	{/each}
</section>
<div
	class="fixed lg:relative bottom-0 left-0 w-full bg-thinAccent transition ease-in-out duration-500 px-4 py-2"
>
	<ul class="flex items-center gap-x-3 text-lightText text-xs">
		<li class=""><a href="/privacy-policy" target="_blank">Privacy Policy</a></li>
		<li class=""><a href="/terms-conditions" target="_blank">Terms & Conditions</a></li>
	</ul>
</div>

<style lang="postcss">
	@media screen(lg) {
		.body {
			height: calc(100vh - var(--header-height) - var(--footer-height) - 2.5vh);
		}
	}
	.footer {
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
