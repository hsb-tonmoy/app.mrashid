<script>
	import { session } from '$app/stores';
</script>

<div class="page-body flex flex-col ml-6 mt-20">
	<h4 class="text-2xl text-lightText font-medium">Personal Information</h4>
	{#if $session.user}
		<p class="mt-10">
			You are logged in with {$session.user.email}
		</p>
	{/if}
</div>
