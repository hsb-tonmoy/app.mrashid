<script>
	import Summary from './Summary.svelte';
	export let summary;
</script>

<div class="flex">
	<Summary {summary} />
</div>
<div class="flex flex-wrap mt-12">
	<button
		class="px-4 py-2 w-72 h-24 bg-white shadow-lg hover:shadow-md shadow-neutral-200 text-black text-lg rounded-lg transition-all-500 ease-in-out duration-500"
	>
		Funding & Hiring Central</button
	>
</div>
