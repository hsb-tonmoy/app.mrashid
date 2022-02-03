<script>
	import { fade } from 'svelte/transition';
	import Button from './Button.svelte';
	export let FormComponentRef;

	import { english_proficiency, english_proficiency_score } from '$lib/home/stores.js';

	let disabled = true;

	let select_width = 'w-32';

	$: $english_proficiency = 'ielts';
	$: ieltsScore = '';

	$: if (
		$english_proficiency === 'ielts' ||
		$english_proficiency === 'toefl' ||
		$english_proficiency === 'duolingo'
	) {
		if (ieltsScore) {
			if (!isNaN(ieltsScore)) {
				disabled = false;
				$english_proficiency_score = ieltsScore;
			}
		} else {
			disabled = true;
		}
	} else {
		disabled = false;
	}

	const options = [
		{ value: 'ielts', label: 'IELTS' },
		{ value: 'toefl', label: 'TOEFL' },
		{ value: 'duolingo', label: 'Duolingo' },
		{ value: 'no-test', label: 'Wish to get enrolled without any test' },
		{ value: 'moi', label: 'Wish to get enrolled with Medium Of Instruction' },
		{ value: 'plan-to', label: 'Wish to take IELTS' }
	];

	$: if ($english_proficiency === 'no-test' || $english_proficiency === 'moi') {
		select_width = 'w-96';
	} else if ($english_proficiency === 'plan-to') {
		select_width = 'w-80';
	}
</script>

<h2
	class="animate__animated animate__slideInLeft text-xl lg:text-5xl text-lightText font-medium drop-shadow"
	style="--animate-duration: 800ms"
>
	Tell us about your English Proficiency Test
</h2>
<div
	class="animate__animated animate__slideInLeft flex items-center gap-x-3 mt-2 ml-2"
	style="--animate-duration: 1000ms"
>
	<span><hr class="w-6 lg:w-10 border-[1.5px] border-lightText" /></span>
	<p class="text-lightTextBody text-sm lg:text-base drop-shadow-sm">
		This will help us serve you better
	</p>
</div>
<img
	src="/images/home-ill-ielts.svg"
	alt="fly-illustration"
	class="animate__animated animate__zoomInRight hidden md:block absolute bottom-[8vh] right-0 object-cover w-[200px] lg:w-[300px] xl:w-[450px] z-0"
	style="--animate-duration: 1000ms"
/>

<fieldset class="relative flex flex-col gap-y-16 mt-16">
	<div class="flex flex-col md:flex-row flex-wrap gap-y-4 lg:gap-x-16">
		<select
			name="curriculum"
			bind:value={$english_proficiency}
			class={`form-select flex items-center border-0 border-b-2 border-thinAccent focus:ring-0 focus:border-b-3 focus:border-accent1 bg-transparent text-accent1 text-base lg:text-xl lg:px-0 lg:pb-4 ${
				$english_proficiency === 'ielts' ||
				$english_proficiency === 'toefl' ||
				$english_proficiency === 'duolingo'
					? 'w-32'
					: 'w-96 md:w-120'
			} ${$english_proficiency === 'plan-to' ? 'w-64' : ''}`}
		>
			{#each options as option}
				<option value={option.value}>{option.label}</option>
			{/each}
		</select>
		{#if $english_proficiency === 'ielts' || $english_proficiency === 'toefl' || $english_proficiency === 'duolingo'}
			<input
				in:fade={{ duration: 200 }}
				type="text"
				name="ieltsScore"
				bind:value={ieltsScore}
				class="form-input border-0 border-b-2 border-thinAccent focus:ring-0 focus:border-b-3 focus:border-accent1 bg-transparent w-24 text-accent1 text-base lg:text-xl lg:px-0 lg:pb-4"
				placeholder="Score"
			/>
		{/if}
	</div>
</fieldset>

<Button {FormComponentRef} disabledButton={disabled} />
