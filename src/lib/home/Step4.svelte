<script>
	export let FormComponentRef;
	import Button from './Button.svelte';

	import { major } from '$lib/home/stores.js';

	const majors = [
		{ name: 'Computer Science', icon: 'compsci' },
		{ name: 'Engineering', icon: 'engineering' },
		{ name: 'Sciences', icon: 'chemistry' },
		{ name: 'Business Studies', icon: 'business' },
		{ name: 'Humanities', icon: 'humanities' },
		{ name: 'Social Sciences', icon: 'social' },
		{ name: 'Health Sciences', icon: 'health' },
		{ name: 'Miscellaneous', icon: 'pharmacy' }
	];
</script>

<h2
	class="animate__animated animate__slideInLeft text-xl lg:text-5xl text-lightText font-semibold drop-shadow"
	style="--animate-duration: 800ms"
>
	What do you wish to study?
</h2>

<div
	class="animate__animated animate__slideInLeft flex items-center gap-x-3 mt-2 ml-2"
	style="--animate-duration: 1000ms"
>
	<span><hr class="w-6 lg:w-10 border-[1.5px] border-lightText" /></span>
	<p class="text-lightTextBody text-sm lg:text-base drop-shadow-sm">
		Choose your intended area of study
	</p>
</div>

<img
	src="/images/home-ill-major.svg"
	alt="fly-illustration"
	class="animate__animated animate__zoomInRight hidden md:block absolute bottom-[4vh] right-0 object-cover w-[200px] xl:w-[350px] 2xl:w-[650px] z-0"
	style="--animate-duration: 1000ms"
/>

<fieldset class="flex flex-wrap gap-2 lg:gap-4 text-sm text-accent2 font-normal mt-8 lg:mt-16">
	{#each majors as option, index}
		<label
			class="animate__animated animate__fadeInUp relative appearance-none cursor-pointer"
			style={`--animate-duration: ${1000 + 200 * index}ms`}
		>
			<input
				class="appearance-none "
				type="radio"
				bind:group={$major}
				name="major"
				value={option.name}
			/>
			<span class="flex flex-col gap-y-3"
				><img class="w-8 h-8" src={`/images/majors/${option.icon}.svg`} alt="USA" />
				{option.name}</span
			>
		</label>
	{/each}
</fieldset>
<Button {FormComponentRef} disabledButton={!$major} />

<style lang="postcss">
	[type='radio'] + span {
		@apply inline-flex justify-center items-center min-w-[9.5rem] h-[8rem] lg:min-w-[10.25rem] lg:h-[8.75rem] border rounded-lg transition ease-in-out delay-150;
		border-color: rgba(62, 52, 200, 0.1);
		box-shadow: 1px 1px 35px 0 rgba(198, 211, 255, 0.28);
	}

	:checked + span {
		background-color: rgb(241, 255, 249);
		border-color: rgb(54, 179, 126);
		@apply scale-105;
	}
</style>
