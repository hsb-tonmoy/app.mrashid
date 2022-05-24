<script context="module">
	export function load({ stuff }) {
		return {
			props: { summary: stuff.summary }
		};
	}
</script>

<script>
	import { current_page_title } from '$lib/dashboard/stores';
	import Summary from '$lib/dashboard/Summary.svelte';
	export let summary;

	$current_page_title = 'Dashboard';
</script>

<svelte:head>
	<title>app.mrashid.net - Dashboard</title>
</svelte:head>

<div class="flex">
	<Summary {summary} />
</div>
