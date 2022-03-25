<script context="module">
	export function load({ stuff }) {
		return {
			props: { summary: stuff.summary }
		};
	}
</script>

<script>
	import AccountCreation from '$lib/dashboard/AccountCreation/AccountCreation.svelte';
	import { current_page_title } from '$lib/dashboard/stores';

	export let summary;

	$current_page_title = 'Account Creation';
</script>

<svelte:head>
	<title>app.mrashid.net - Account Creation</title>
</svelte:head>

<AccountCreation {summary} />
