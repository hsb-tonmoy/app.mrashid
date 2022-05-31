<script context="module">
	export async function load({ session }) {
		if (session.user.account_type != 6) {
			return {
				status: 302,
				redirect: '/dashboard'
			};
		}
		return {};
	}
</script>

<script>
	import { submit_identifier, current_page_title } from '$lib/dashboard/stores';
	import ResourceCenter from '$lib/dashboard/ResourceCenter/ResourceCenter.svelte';

	$current_page_title = 'Resource Center';
	$submit_identifier = null;
</script>

<svelte:head>
	<title>app.mrashid.net - Resource Center</title>
</svelte:head>

<ResourceCenter />
