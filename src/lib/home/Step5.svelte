<script>
	import Button from './Button.svelte';
	export let FormComponentRef;

	let selections = [''];

	let fields = [
		{
			curriculum: {
				type: 'select',
				options: ['NCTB', 'English Version', 'English Medium']
			},
			level: {
				type: 'select',
				options: ['SSC', 'HSC', 'O Level', 'A Level', "Bachelor's", "Master's"]
			}
		}
	];

	$: console.log(selections);
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
	src="/images/home-ill-personal.svg"
	alt="fly-illustration"
	class="animate__animated animate__zoomInRight absolute bottom-[8vh] right-0 object-cover w-[200px] lg:w-[350px] xl:w-[550px] z-0"
	style="--animate-duration: 1000ms"
/>

<fieldset class="flex gap-x-8 mt-16">
	{#each fields as field}
		<select name="curriculum" bind:value={selections} class="form-select">
			{#each field.curriculum.options as option}
				<option value={option}>{option}</option>
			{/each}
		</select>
		<select name="level" id="" />
	{/each}
</fieldset>

<Button {FormComponentRef} disabledButton={false} />

<style lang="postcss">
	small {
		@apply text-red-700;
	}
</style>
