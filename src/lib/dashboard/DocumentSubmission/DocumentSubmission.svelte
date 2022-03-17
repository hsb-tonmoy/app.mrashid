<script>
	import { check, pending } from '$lib/svg/document_submission';
	import { convertDate } from '$lib/convertDate';
	import UploadModal from './FileUpload/UploadModal.svelte';

	export let document_category;
	export let document;
</script>

<section class="flex flex-col">
	<UploadModal {document_category} />

	{#each document_category as category}
		<h3 class="font-medium text-lg text-lightText mb-4">{category.name}</h3>
		<table class="shadow-md rounded-sm ml-1 mb-12">
			<tr class="text-xs text-gray-600 border-b-2 border-gray-500 text-left">
				<th class="w-3/5 p-2">Name</th>
				<th class="w-[15%]">Approved</th>
				<th class="w-[25%]">Dated Added</th>
			</tr>
			{#each document as doc}
				{#if doc.category.slug == category.slug}
					<tr class="text-sm">
						<td class="p-2">{doc.title}</td>
						<td>
							{#if doc.is_approved && !doc.is_rejected}
								{@html check} Approved
							{:else}
								{@html pending} Pending
							{/if}
						</td>
						<td>{convertDate(doc.uploaded_at)}</td>
					</tr>
				{/if}
			{/each}
		</table>
	{/each}
</section>
