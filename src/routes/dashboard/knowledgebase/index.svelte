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
	import ArticleList from '$lib/dashboard/Knowledgebase/ArticleList.svelte';

	$current_page_title = 'Knowledgebase';
	$submit_identifier = null;
</script>

<svelte:head>
	<title>app.mrashid.net - Knowledgebase</title>
</svelte:head>

<ArticleList />
