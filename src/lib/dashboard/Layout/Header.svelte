<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { arrow_left } from '$lib/svg/dashboard';

	let title = 'Dashboard';
</script>

<header
	class="flex fixed items-center justify-between px-6 h-24 w-full lg:w-[60%] bg-white border-b border-gray-200 z-50"
>
	<div class="flex items-center gap-x-4">
		{#if $page.url.pathname !== '/dashboard'}
			<div
				on:click={() => goto('/dashboard')}
				class="flex justify-center items-center w-14 h-10 bg-[#F8F8F8] hover:bg-gray-300 rounded-2xl cursor-pointer shadow-sm"
			>
				<span class="text-[#757D8A] font-bold w-5 h-5">{@html arrow_left}</span>
			</div>
		{/if}
		<h1 class="text-2xl text-[#404D61] font-bold">{title}</h1>
	</div>
</header>
