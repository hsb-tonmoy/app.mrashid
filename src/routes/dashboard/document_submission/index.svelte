<script>
	import { session } from '$app/stores';

	import DocumentSubmission from '$lib/dashboard/DocumentSubmission/DocumentSubmission.svelte';
</script>

<svelte:head>
	<title>app.mrashid.net - Document Submission</title>
</svelte:head>

<div class="page-body flex flex-col ml-6 mt-20">
	<h4 class="text-2xl text-lightText font-medium mb-8">Document Submission</h4>
	<DocumentSubmission />
</div>
