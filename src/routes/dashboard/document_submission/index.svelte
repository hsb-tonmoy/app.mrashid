<script>
	import { session } from '$app/stores';
	import { current_page_title } from '$lib/dashboard/stores';

	$current_page_title = 'Document Submission';

	import DocumentSubmission from '$lib/dashboard/DocumentSubmission/DocumentSubmission.svelte';

	export let document_category;
	export let document;
</script>

<svelte:head>
	<title>app.mrashid.net - Document Submission</title>
</svelte:head>

<div class="page-body flex flex-col">
	<h4 class="text-2xl text-lightText font-medium mb-8">Document Submission</h4>
	<DocumentSubmission {document_category} {document} />
</div>
