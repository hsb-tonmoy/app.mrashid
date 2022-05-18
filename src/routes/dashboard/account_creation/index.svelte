<script>
	import AccountCreation from '$lib/dashboard/AccountCreation/AccountCreation.svelte';
	import { current_page_title } from '$lib/dashboard/stores';

	export let data;

	$current_page_title = 'Account Creation';
</script>

<svelte:head>
	<title>app.mrashid.net - Account Creation</title>
</svelte:head>

<AccountCreation summary={data} />
