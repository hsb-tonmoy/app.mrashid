<script>
	import { getStores, navigating, page, session, updated } from '$app/stores';

	import TimeAgo from 'javascript-time-ago';
	import en from 'javascript-time-ago/locale/en.json';
	TimeAgo.addLocale(en);
	const timeAgo = new TimeAgo('en-US');

	$: console.log($page.url.pathname);

	export let notes;

	let notes_to_display = [];

	$: notes_to_display = notes.filter((n) => {
		console.log(n.category.slug);
		$page.url.pathname.includes(n.category.slug);
	});

	$: console.log(notes_to_display);

	function priorityColor(priority) {
		switch (priority) {
			case 1:
				return 'bg-gray-200';
			case 2:
				return 'bg-amber-600';
			case 3:
				return 'bg-red-400';
			case 4:
				return 'bg-red-600';
			default:
				return 'bg-gray-200';
		}
	}
</script>

<h3 class="font-semibold text-3xl text-lightText">Consultant Notes</h3>
<div class="relative pt-12 flex flex-col min-w-0 break-words w-full mb-6 rounded-lg">
	<div class="px-8">
		{#if notes.length > 0}
			<ol class="relative border-l border-gray-200 dark:border-gray-700 ">
				{#each notes as note}
					<li class="mb-10 ml-6">
						<div
							class={`flex absolute -left-3 justify-center items-center w-6 h-6 ${priorityColor(
								note.priority
							)} rounded-full ring-8 ring-white`}
						>
							<span />
						</div>
						<div class={`px-2 bg-white rounded-lg shadow-sm dark:bg-gray-700 `}>
							<div class="justify-between items-center sm:flex">
								<time
									class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"
									class:line-through={note.complete}
									>{timeAgo.format(new Date(note.date_added))}</time
								>
								<div
									class="text-sm font-normal decoration-dotted text-stone-800 lex dark:text-gray-300"
									class:line-through={note.complete}
								>
									{note.title}
								</div>
							</div>
							{#if note.description}
								<div
									class="p-3 mt-3 text-xs italic font-normal text-gray-800 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300"
									class:line-through={note.complete}
								>
									{note.description}
								</div>
							{/if}
						</div>
					</li>
				{/each}
			</ol>
		{:else}
			<div class="flex items-center justify-center">
				<div class="text-center text-gray-600 text-sm">No notes to display</div>
			</div>
		{/if}
	</div>
</div>
