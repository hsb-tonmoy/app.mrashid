<script>
	import { submit_identifier, current_page_title } from '$lib/dashboard/stores';
	import Feed from '$lib/dashboard/ResourceCenter/HappeningNow/Feed.svelte';

	$submit_identifier = null;

	$current_page_title = 'Happening Now!';
</script>

<svelte:head>
	<title>app.mrashid.net - Happening Now!</title>
</svelte:head>

<Feed />
