<script>
	import Button from './Button.svelte';
	export let FormComponentRef;

	import { education } from '$lib/home/stores.js';

	let length = 2;

	let curriculums = ['NCTB', 'English Version', 'English Medium'];
	let levels = ['SSC', 'HSC', 'O Level', 'A Level', "Bachelor's", "Master's"];

	let education_data = [
		{
			curriculum: '',
			level: '',
			gpa: '',
			year: ''
		},
		{
			curriculum: '',
			level: '',
			gpa: '',
			year: ''
		}
	];

	$: $education = education_data;

	function handleAdd() {
		length += 1;
		education_data = [
			...education_data,
			{
				curriculum: '',
				level: '',
				gpa: '',
				year: ''
			}
		];
	}

	function handleRemove() {
		length -= 1;
		education_data = education_data.filter((element, index) => index < education_data.length - 1);
	}
</script>

<h2
	class="animate__animated animate__slideInLeft text-xl lg:text-5xl text-lightText font-semibold drop-shadow"
	style="--animate-duration: 800ms"
>
	Please enter your academic credentials
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
	src="/images/home-ill-credentials.svg"
	alt="fly-illustration"
	class="animate__animated animate__zoomInRight absolute bottom-[1vh] lg:bottom-[8vh] right-0 object-cover w-[300px] lg:w-[350px] xl:w-[450px] z-0"
	style="--animate-duration: 1000ms"
/>

<fieldset class="relative flex flex-col gap-y-16 mt-16">
	{#each { length: length } as _, i}
		<div class="flex flex-wrap gap-y-4 lg:gap-x-16">
			<select
				name="curriculum"
				bind:value={education_data[i].curriculum}
				class="form-select border-0 border-b-2 border-thinAccent focus:ring-0 focus:border-b-3 focus:border-accent1 bg-transparent w-52 lg:w-60 text-accent1 text-base lg:text-xl lg:px-0 lg:pb-4"
			>
				<option value="" selected>Choose a curriculum</option>
				{#each curriculums as option}
					<option value={option}>{option}</option>
				{/each}
			</select>
			<select
				name="level"
				bind:value={education_data[i].level}
				class="form-select border-0 border-b-2 border-thinAccent focus:ring-0 focus:border-b-3 focus:border-accent1 bg-transparent w-52 lg:w-60 text-accent1 text-base lg:text-xl lg:px-0 lg:pb-4"
			>
				<option value="" disabled selected hidden>Choose a level</option>
				{#each levels as option}
					<option value={option}>{option}</option>
				{/each}
			</select>
			<input
				type="text"
				name="GPA"
				placeholder="GPA"
				bind:value={education_data[i].gpa}
				class="form-input border-0 border-b-2 border-thinAccent focus:ring-0 focus:border-b-3 focus:border-accent1 bg-transparent text-accent1 text-base lg:text-xl placeholder:text-accent1 placeholder:text-base placeholder:lg:text-xl px-4 w-52 lg:w-60"
			/>
			<input
				type="text"
				name="Year"
				placeholder="Year"
				bind:value={education_data[i].year}
				class="form-input border-0 border-b-2 border-thinAccent focus:ring-0 focus:border-b-3 focus:border-accent1 bg-transparent text-accent1 text-base lg:text-xl placeholder:text-accent1 placeholder:text-base placeholder:lg:text-xl px-4 w-52 lg:w-60"
			/>
		</div>
	{/each}
	<div class="flex gap-x-2">
		<button
			type="button"
			class="bg-thinAccent hover:bg-accent1 text-white px-3 py-2"
			on:click={handleAdd}>Add more degrees</button
		>
		{#if length > 2}
			<button
				type="button"
				class="bg-thinAccent hover:bg-accent1 text-white px-3 py-2"
				on:click={handleRemove}>-</button
			>
		{/if}
	</div>
</fieldset>

<div class="pb-8"><Button {FormComponentRef} disabledButton={false} /></div>
