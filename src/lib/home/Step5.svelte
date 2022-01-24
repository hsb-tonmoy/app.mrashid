<script>
	import Button from './Button.svelte';
	export let FormComponentRef;

	let length = 2;

	let selections = [
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

	let curriculums = ['NCTB', 'English Version', 'English Medium'];
	let levels = ['SSC', 'HSC', 'O Level', 'A Level', "Bachelor's", "Master's"];

	function handleAdd() {
		length += 1;
		selections = [
			...selections,
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
		selections = selections.filter((element, index) => index < selections.length - 1);
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
	class="animate__animated animate__zoomInRight fixed bottom-0 lg:bottom-[8vh] right-0 object-cover w-[300px] lg:w-[550px] xl:w-[750px] z-0"
	style="--animate-duration: 1000ms"
/>

<fieldset class="relative flex flex-col gap-y-16 mt-16">
	{#each { length: length } as _, i}
		<div class="flex flex-wrap gap-y-4 lg:gap-x-16">
			<select
				name="curriculum"
				bind:value={selections[i].curriculum}
				class="form-select border-0 border-b-2 border-thinAccent focus:ring-0 focus:border-b-3 focus:border-accent1 bg-transparent w-52 lg:w-60 text-accent1 text-base lg:text-xl lg:px-0 lg:pb-4"
			>
				<option value="" selected>Choose a curriculum</option>
				{#each curriculums as option}
					<option value={option}>{option}</option>
				{/each}
			</select>
			<select
				name="level"
				bind:value={selections[i].level}
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
				bind:value={selections[i].gpa}
				class="form-input border-0 border-b-2 border-thinAccent focus:ring-0 focus:border-b-3 focus:border-accent1 bg-transparent text-accent1 text-base lg:text-xl placeholder:text-accent1 placeholder:text-base placeholder:lg:text-xl px-4 w-52 lg:w-60"
			/>
			<input
				type="text"
				name="Year"
				placeholder="Year"
				bind:value={selections[i].year}
				class="form-input border-0 border-b-2 border-thinAccent focus:ring-0 focus:border-b-3 focus:border-accent1 bg-transparent text-accent1 text-base lg:text-xl placeholder:text-accent1 placeholder:text-base placeholder:lg:text-xl px-4 w-52 lg:w-60"
			/>
		</div>
	{/each}
	<div class="flex gap-x-2 relative lg:absolute lg:bottom-0 lg:-right-28">
		<button
			type="button"
			class="bg-thinAccent hover:bg-accent1 text-white px-3 py-2"
			on:click={handleAdd}>+</button
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
