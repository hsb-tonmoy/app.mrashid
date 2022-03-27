<script context="module">
	export async function load({ fetch, session }) {
		if (!session.user) {
			return {
				status: 302,
				redirect: '/login'
			};
		}

		if (!session.user.student_id) {
			return {};
		}

		const res = await fetch('/dashboard.json');
		const data = await res.json();

		if (res.ok && res.body) {
			return {
				props: { summary: data.summary, notes: data.notes, progress: data.progress },
				stuff: { summary: data.summary }
			};
		}

		return {};
	}
</script>

<script>
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Header from '$lib/dashboard/Layout/Header.svelte';
	import LeftSidebar from '$lib/dashboard/Layout/LeftSidebar/LeftSidebar.svelte';
	import NoStudentDataError from '$lib/dashboard/Layout/NoStudentDataError.svelte';
	import Notes from '$lib/dashboard/Notes.svelte';
	import { current_page } from '$lib/dashboard/stores';

	export let summary;
	export let notes;
	export let progress;

	let notes_show = false;

	let timeline_show = false;

	$: content_width = notes_show ? 'w-full lg:w-[55%] lg:mr-[25%]' : 'w-full lg:w-[80%] lg:mr-0';

	$: pathname = $page.url.pathname.split('/');
	$: current_page_path = pathname[pathname.length - 1];
	$: $current_page = current_page_path;
</script>

<svelte:head>
	<title>app.mrashid.net - Dashboard</title>
</svelte:head>

<main class="flex w-full bg-white h-screen font-sans">
	{#if summary}
		<LeftSidebar {timeline_show} {progress} />
		<div id="content-body" class={`center-content ${content_width}`}>
			<Header bind:notes_show bind:timeline_show />
			<div class="px-4 lg:px-12 py-8 mt-24 z-40">
				<slot />
			</div>
		</div>
		{#if notes_show}
			<aside
				in:fly={{ x: 200, duration: 500 }}
				out:fly={{ x: 200, duration: 500 }}
				class="right-sidebar"
			>
				<Notes {notes} />
			</aside>
		{/if}
	{:else}
		<NoStudentDataError />
	{/if}
</main>
<SvelteToast />

<style lang="postcss">
	.center-content {
		@apply relative lg:ml-[20%] bg-white transition-all ease-in-out duration-500;
	}
	.right-sidebar {
		@apply flex fixed overflow-y-auto right-0 mt-24 lg:mt-0 flex-col h-full w-11/12 md:w-3/5 lg:w-[25%] p-8 bg-white border-l border-gray-200 z-50;
	}
</style>
