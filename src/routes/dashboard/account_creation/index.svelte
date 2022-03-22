<script context="module">
	export function load({ stuff }) {
		return {
			props: { summary: stuff.summary }
		};
	}
</script>

<script>
	import AccountCreation from '$lib/dashboard/AccountCreation/AccountCreation.svelte';

	export let summary;
</script>

<svelte:head>
	<title>app.mrashid.net - Account Creation</title>
</svelte:head>

<AccountCreation {summary} />
