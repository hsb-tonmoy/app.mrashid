<script context="module">
	export function load({ stuff }) {
		return {
			props: { summary: stuff.summary }
		};
	}
</script>

<script>
	import { session } from '$app/stores';

	export let summary;

	import AccountCreation from '$lib/dashboard/AccountCreation.svelte';
</script>

<div class="page-body flex flex-col ml-6 mt-20">
	<h4 class="text-2xl text-lightText font-medium">Personal Information</h4>
	<AccountCreation {summary} />
</div>
