<script context="module">
	export async function load({ fetch, props, stuff }) {
		let pre_application_form = props.pre_application_form;

		const res = await fetch('/dashboard.json');
		const data = await res.json();
		const account_creation = data.summary;

		if (res.ok && res.body) {
			return {
				props: { pre_application_form, summary: account_creation }
			};
		}

		return {
			props: { pre_application_form, summary: stuff.summary }
		};
	}
</script>

<script>
	import { current_page_title } from '$lib/dashboard/stores';
	import StartPreApplicationForm from '$lib/dashboard/ApplicationSubmission/StartPreApplicationForm.svelte';
	import PreApplicationForm from '$lib/dashboard/ApplicationSubmission/PreApplicationForm.svelte';

	$current_page_title = 'Application Submission';

	export let summary;

	export let pre_application_form;
</script>

<svelte:head>
	<title>app.mrashid.net - Application Submission</title>
</svelte:head>

{#if pre_application_form.detail === 'Not found.'}
	<StartPreApplicationForm {summary} />
{:else}
	<PreApplicationForm {summary} {pre_application_form} />
{/if}
