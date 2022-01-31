<script>
	import { fade } from 'svelte/transition';
	import Button from './Button.svelte';
	export let FormComponentRef;

	import { ielts } from '$lib/home/stores.js';

	$: ielts_data = '';
	$: ieltsScore = '';

	let disabled = true;

	$: if (ielts_data) {
		if (ielts_data === 'taken') {
			if (ieltsScore) {
				disabled = false;
				$ielts = ieltsScore;
			} else {
				disabled = true;
			}
		} else {
			disabled = false;
			$ielts = ielts_data;
		}
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
	<label class="flex items-center gap-x-2 text-accent1 text-base lg:text-2xl font-medium"
		><input
			type="radio"
			name="not-taken"
			value="not-taken"
			id="not-taken"
			bind:group={ielts_data}
			class="form-radio w-4 h-4 lg:w-6 lg:h-6 checked:text-accent2 focus:ring-accent2 outline-none"
		/>
		IELTS - Not yet taken
	</label>
	<label class="flex items-center gap-x-2 text-accent1 text-base lg:text-2xl font-medium"
		><input
			type="radio"
			name="taken"
			value="taken"
			id="taken"
			bind:group={ielts_data}
			class="form-radio w-4 h-4 lg:w-6 lg:h-6 checked:text-accent2 focus:ring-accent2 outline-none"
		/>
		IELTS - Taken
		{#if ielts_data === 'taken'}
			:
			<div class="relative">
				<input
					transition:fade={{ duration: 500 }}
					type="text"
					name="ielts-score"
					id="ielts-score"
					class="form-input w-40 text-accent1 bg-transparent text-base lg:text-2xl font-medium border-0 border-b-2 border-accent1 focus:border-accent1 focus:ring-0"
					placeholder="Score"
					bind:value={ieltsScore}
				/>
			</div>
		{/if}
	</label>
	<label class="flex items-center gap-x-2 text-accent1 text-base lg:text-2xl font-medium"
		><input
			type="radio"
			name="wont-take"
			value="wont-take"
			id="wont-take"
			bind:group={ielts_data}
			class="form-radio w-4 h-4 lg:w-6 lg:h-6 checked:text-accent2 focus:ring-accent2 outline-none"
		/>
		Wish to get enrolled without IELTS
	</label>
</fieldset>

<Button {FormComponentRef} disabledButton={disabled} />
