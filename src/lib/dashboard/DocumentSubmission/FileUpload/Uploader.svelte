<script>
	import Dropzone from 'svelte-file-dropzone';

	export let files = {
		accepted: []
	};

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...acceptedFiles];
	}
</script>

<Dropzone
	on:drop={handleFilesSelect}
	multiple={false}
	accept={['.pdf', '.doc', '.docx', '.jpg', '.png', '.jpeg']}
	disableDefaultStyles={true}
	containerClasses="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center"
>
	<p class="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
		<span>Drag and drop your</span>&nbsp;<span>files here or</span>
	</p>
	<input id="hidden-input" type="file" class="hidden" />
	<button
		id="button"
		type="button"
		class="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
	>
		Click here to select
	</button>
</Dropzone>
{#each files.accepted as item}
	<div>
		<span>{item.name}</span>
	</div>
{/each}
