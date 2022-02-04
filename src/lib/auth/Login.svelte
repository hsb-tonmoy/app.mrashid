<script>
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	const { form, errors, state, isValid, touched, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: yup.object().shape({
			email: yup
				.string()
				.email('Please enter a valid e-mail address')
				.required('Email address is required')
				.trim(),
			password: yup.string().required('Password is required')
		})
	});
</script>

<form on:submit|preventDefault={handleSubmit}>
	<fieldset class="mt-10">
		<div class="flex flex-col gap-y-8">
			<span class="relative w-2/4">
				<input
					id="email"
					name="email"
					type="text"
					class="peer h-10 w-80 bg-transparent border-b-2 border-thinAccent text-base lg:text-lg font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
					placeholder="Email address"
					bind:value={$form.email}
					on:change={handleChange}
				/>
				<label
					for="email"
					class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
					>Email address</label
				>
			</span>
			<span class="relative w-2/4">
				<input
					id="password"
					name="password"
					type="password"
					class="peer h-10 w-80 bg-transparent border-b-2 border-thinAccent text-base lg:text-lg font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
					placeholder="Email address"
					bind:value={$form.password}
					on:change={handleChange}
				/>
				<label
					for="password"
					class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
					>Password</label
				>
			</span>
			<button
				on:click|preventDefault={handleSubmit}
				class="px-6 lg:px-12 py-2 lg:py-4 ml-2 lg:ml-0 bg-accent1 hover:bg-accent2 disabled:bg-thinAccent text-white font-light text-sm uppercase animate__animated animate__slideInRight"
				disabled={!$isValid || !($state.modified.email && $state.modified.password)}>Login</button
			>
		</div>
	</fieldset>
</form>
