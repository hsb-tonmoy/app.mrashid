<script context="module">
	export async function load({ fetch, session }) {
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
				props: { summary: data.summary, notes: data.notes, progress: data.progress },
				stuff: { summary: data.summary }
			};
		}

		return {};
	}
</script>

<script>
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Header from '$lib/dashboard/Layout/Header.svelte';
	import Timeline from '$lib/dashboard/Layout/Timeline/Timeline.svelte';
	import NoStudentDataError from '$lib/dashboard/Layout/NoStudentDataError.svelte';
	import Notes from '$lib/dashboard/Notes.svelte';

	export let summary;
	export let notes;
	export let progress;
</script>

<main class="flex w-full bg-white h-screen font-sans">
	<aside class="left-sidebar">
		<Timeline student_progress={progress} />
	</aside>
	<div class="center-content">
		{#if summary}
			<Header />
			<div class="px-12 py-8">
				<slot />
			</div>
		{:else}
			<NoStudentDataError />
		{/if}
	</div>
	<aside class="right-sidebar">
		<Notes {notes} />
	</aside>
</main>
<SvelteToast />

<style lang="postcss">
	.left-sidebar {
		@apply hidden lg:flex flex-col items-center h-full w-[15%] py-9 px-10 bg-[#F1F6F9] border-r border-gray-200;
	}
	.center-content {
		@apply min-w-[60%] bg-white;
	}
	.right-sidebar {
		@apply flex flex-col w-auto p-8 border-l border-l-gray-100 left-shadow;
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
