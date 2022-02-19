<script context="module">
	export async function load({ fetch, session, stuff }) {
		if (!session.user) {
			return {
				status: 302,
				redirect: '/login'
			};
		}

		const res = await fetch('/dashboard.json');
		const data = await res.json();

		if (res.ok && res.body) {
			return {
				props: { summary: data },
				stuff: { summary: data }
			};
		}

		return {};
	}
</script>

<script>
	import { grid, bell, message, help, chart, arrow_left, logout } from '$lib/svg/dashboard';

	import Timeline from '$lib/dashboard/Timeline.svelte';
	import Notes from '$lib/dashboard/Notes.svelte';
	import Summary from '$lib/dashboard/Summary.svelte';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';

	let selected = true;

	export let summary;
</script>

<main class="flex w-full bg-white h-screen font-montserrat">
	<aside class="flex flex-col justify-between items-center w-auto px-6 py-16 right-shadow">
		<div id="logo">
			<img class="w-10 h-10" src="/logo.png" alt="app.mrashid.net" />
		</div>
		<div id="menu" class="flex flex-col gap-y-8">
			<span class="menu-icon" class:menu-icon-active={selected}>{@html grid}</span>
			<span class="menu-icon">{@html bell}</span>
			<span class="menu-icon">{@html message}</span>
			<span class="menu-icon">{@html chart}</span>
			<span class="menu-icon">{@html help}</span>
		</div>
		<div id="profile" class="flex flex-col justify-end h-[20%] gap-y-4">
			<span
				class="menu-icon rotate-180 cursor-pointer"
				on:click={() => {
					goto('/logout');
				}}>{@html logout}</span
			>
		</div>
	</aside>
	<aside class="hidden lg:flex flex-col items-center h-full w-auto py-12 px-10 bg-[#F5F7FB]">
		<Timeline />
	</aside>
	<div id="main" class="w-[49vw] 2xl:w-[56vw] bg-white px-10 py-16">
		{#if summary}
			<Summary {summary} />
			<slot />
		{:else}
			<div class="flex flex-col w-full h-full justify-center items-center text-center">
				<h2 class="text-xl xl:text-3xl font-semibold text-lightText mb-3">
					You haven't submitted the form yet! Please do so to access your dashboard
				</h2>
				<p class="text-sm lg:text-base text-gray-700">
					On the contrary, if you've already submitted the form but still seeing this message,
					please send an email to <a
						href="mailto:help@mrashid.net"
						class="text-blue-600 hover:underline">help@mrashid.net</a
					> and include your full name and email address used in the form.
				</p>
			</div>
		{/if}
	</div>
	<aside class="flex flex-col w-[25vw] py-16 px-12 border-l border-l-gray-100 left-shadow">
		<Notes />
	</aside>
</main>

<style lang="postcss">
	.menu-icon {
		@apply text-[#C4C6CC] h-10 w-10 2xl:h-12 2xl:w-12 p-2 rounded-lg transition-all duration-300 ease-in-out;
	}

	.menu-icon:hover,
	.menu-icon-active {
		@apply bg-black text-white;
	}

	.right-shadow {
		box-shadow: 0 0 15px rgba(229, 231, 235, 0.4);
		clip-path: inset(0px -15px 0px 0px);
	}

	.left-shadow {
		box-shadow: 0 0 15px rgba(229, 231, 235, 0.2);
		clip-path: inset(0px 0px 0px -15px);
	}
</style>
