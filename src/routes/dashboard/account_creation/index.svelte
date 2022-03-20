<script context="module">
	export function load({ stuff }) {
		return {
			props: { summary: stuff.summary }
		};
	}
</script>

<script>
	import AccountCreation from '$lib/dashboard/AccountCreation.svelte';

	export let summary;
</script>

<AccountCreation {summary} />
