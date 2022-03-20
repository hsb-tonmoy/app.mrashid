<script>
	export let summary;

	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	const { form, state, isValid, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: summary.email,
			first_name: summary.first_name,
			last_name: summary.last_name
		},
		validationSchema: yup.object().shape({
			email: yup
				.string()
				.email('Please enter a valid e-mail address')
				.required('Email address is required')
				.trim(),
			first_name: yup.string().required('First name is required').trim(),
			last_name: yup.string().required('Last name is required').trim()
		}),
		onSubmit: (values) => {
			handleLogin(values);
		}
	});
</script>

<h4 class="text-2xl text-lightText font-medium">Personal Information</h4>
<form class="flex w-full gap-x-8 text-sm mt-8" on:submit|preventDefault={handleSubmit}>
	<fieldset class="flex flex-col w-2/4 gap-y-6">
		<label class="block">
			<span class="label">Email address</span>
			<input
				type="email"
				name="email"
				id="email"
				class="input-text
      "
				bind:value={$form.email}
				on:change={handleChange}
			/>
		</label>
		<div class="flex gap-x-4">
			<div class="w-2/4">
				<label class="block">
					<span class="label">First name</span>
					<input
						type="text"
						name="first_name"
						id="first_name"
						class="input-text
              "
						bind:value={$form.first_name}
						on:change={handleChange}
					/>
				</label>
			</div>
			<div class="w-2/4">
				<label class="block">
					<span class="label">Last name</span>
					<input
						type="text"
						name="last_name"
						id="last_name"
						class="input-text
              "
						bind:value={$form.last_name}
						on:change={handleChange}
					/>
				</label>
			</div>
		</div>
	</fieldset>
	<div class="divider w-[1px] mt-10 mb-5 bg-gray-200" />
	<fieldset class="flex flex-col w-2/4 gap-y-6">
		<label class="block">
			<span class="label">Email address</span>
			<input
				type="email"
				name="email"
				id="email"
				class="input-text
      "
				bind:value={$form.email}
				on:change={handleChange}
			/>
		</label>
		<label class="block">
			<span class="label">First name</span>
			<input
				type="text"
				name="first_name"
				id="first_name"
				class="input-text
      "
				bind:value={$form.first_name}
				on:change={handleChange}
			/>
		</label>
		<label class="block">
			<span class="label">Last name</span>
			<input
				type="text"
				name="last_name"
				id="last_name"
				class="input-text"
				bind:value={$form.last_name}
				on:change={handleChange}
			/>
		</label>
	</fieldset>
</form>

<style lang="postcss">
	.label {
		@apply text-lightText font-medium mb-4;
	}

	.input-text {
		@apply form-input mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent2 focus:border focus:ring focus:ring-accent2 focus:ring-opacity-90;
	}
</style>
