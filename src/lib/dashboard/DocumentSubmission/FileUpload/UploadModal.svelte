<script>
	import { session } from '$app/stores';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { toast } from '@zerodevx/svelte-toast';
	import Uploader from './Uploader.svelte';

	let show = true;

	let files = {
		accepted: []
	};

	export let document_category;

	const { form, state, isValid, handleChange, handleSubmit } = createForm({
		initialValues: {
			title: '',
			category: 1,
			student_data: $session.user.student_id,
			document: null
		},
		validationSchema: yup.object().shape({
			title: yup.string().required('Title is required').trim()
		}),
		onSubmit: (values) => {
			handleUpload(values);
		}
	});

	$: $form.document = files.accepted && files.accepted[0];
	$: $form.title = files.accepted[0] && files.accepted[0].name;

	async function handleUpload(values) {
		let formData = new FormData();
		formData.append('title', $form.title);
		formData.append('category', $form.category);
		formData.append('student_data', $form.student_data);
		formData.append('document', $form.document);

		const res = await fetch('document_submission', {
			method: 'POST',
			credentials: 'include',

			body: formData
		});

		if (res.ok) {
			toast.push(`File successfully uploaded!`, {
				duration: 3000,

				theme: {
					'--toastBackground': '#48BB78',
					'--toastBarBackground': '#2F855A'
				}
			});
			files.accepted = [];
			show = true;
			location.reload();
		} else {
			console.log(res);
		}
	}
</script>

<button
	on:click={() => {
		show = !show;
	}}
	class="self-end bg-sky-500 text-white active:bg-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
	type="button"
>
	Upload a Document
</button>

<div
	class:hidden={show}
	class="flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0 bg-black/50"
>
	<div class="relative bg-white w-full max-w-2xl h-full md:h-auto">
		<div class="relative bg-blueGray-100 px-4 rounded-lg shadow dark:bg-gray-700">
			<div class="flex justify-end py-2">
				<button
					on:click={() => {
						show = !show;
					}}
					type="button"
					class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
				>
					<svg
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/></svg
					>
				</button>
			</div>

			<form on:submit|preventDefault={handleSubmit}>
				<div class="flex flex-wrap pb-10">
					<div class="w-full lg:w-12/12 px-4">
						<h6 class="text-lg text-lightText mb-6">Upload a New Document</h6>
						<div class="w-full flex gap-x-4">
							<div class="relative w-3/5 mb-3">
								<label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="title">
									Document Name
								</label>
								<input
									id="title"
									type="text"
									class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									bind:value={$form.title}
									on:change={handleChange}
								/>
							</div>
							<div class="relative w-2/5 mb-3">
								<label
									class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									for="category"
								>
									Document Type
								</label>
								<select
									id="category"
									class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									bind:value={$form.category}
									on:change={handleChange}
								>
									{#each document_category as category}
										<option value={category.id}>{category.name}</option>
									{/each}
								</select>
							</div>
						</div>
					</div>
					<div class="w-full lg:w-12/12 px-4 mt-4">
						<div class="relative w-full mb-3">
							<Uploader bind:files />
						</div>
						<div class="flex gap-x-2 mt-8">
							<button
								disabled={!$isValid || !$state.modified.title}
								type="submit"
								class="bg-green-500 text-white active:bg-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
							>
								Upload
							</button>
							<button
								on:click={() => {
									show = !show;
								}}
								type="button"
								class="bg-red-500 text-white active:bg-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
