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

	console.log(summary);
</script>

<div class="page-body flex flex-col ml-6 mt-20">
	<h4 class="text-2xl text-lightText font-medium">Personal Information</h4>
	{#if $session.user}
		<p class="mt-10">
			You are logged in with {$session.user.username}
		</p>
	{/if}
</div>
