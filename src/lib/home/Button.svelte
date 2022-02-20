<script>
	import { dev } from '$app/env';
	import { createEventDispatcher } from 'svelte';

	let dispatch = createEventDispatcher();

	import { notificationToast } from '$lib/NotificationToast';

	export let firstStep = false,
		FormComponentRef,
		disabledButton = true,
		submit = false;

	import {
		destination,
		degree,
		firstname,
		lastname,
		email,
		phone,
		social_media,
		major,
		education,
		english_proficiency,
		english_proficiency_score,
		message
	} from './stores.js';

	const API_URL = import.meta.env.VITE_API_URL;

	function handlePrevious() {
		FormComponentRef.previousStep();
	}

	function handleNext() {
		dispatch('submit');
		FormComponentRef.nextStep();
	}

	$: data = {
		destination: $destination,
		degree: $degree,
		first_name: $firstname,
		last_name: $lastname,
		email: $email,
		phone: $phone,
		social_media: $social_media || 'NA',
		major: $major,
		education: $education,
		english_proficiency: $english_proficiency,
		english_proficiency_score: $english_proficiency_score,
		message: $message
	};

	async function handleSubmit() {
		if (!dev) {
			try {
				const res = await fetch(API_URL + 'student_data/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				});
				const response = await res.json();

				if (res.status === 201) {
					handleNext();
				} else if (
					res.status === 400 &&
					response.email[0] === 'Student Data with this Email already exists.'
				) {
					notificationToast(
						'You have already submitted once. Please wait for our team to reach out to you.'
					);
				} else {
					notificationToast('Something went wrong. Please try again.');
					console.log(response);
				}
			} catch (err) {
				console.log(err);
			}
		} else {
			handleNext();
			console.log(data);
		}
	}
</script>

<div class="buttons flex gap-x-2 lg:justify-end mt-12">
	{#if !firstStep}
		<button
			on:click|preventDefault={handlePrevious}
			class="relative px-4 lg:px-8 py-3 lg:py-4 ml-2 lg:ml-0 bg-gray-300 hover:bg-gray-400 transition-all ease-in-out hover:bg-accent2 disabled:bg-thinAccent text-zinc-700 hover:text-gray-100 font-light text-sm uppercase rounded animate__animated animate__slideInLeft"
			type="button"
			><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M7 16l-4-4m0 0l4-4m-4 4h18"
				/>
			</svg></button
		>
	{/if}
	{#if !submit}
		<button
			on:click|preventDefault={handleNext}
			class="relative px-12 lg:px-24 py-4 lg:py-6 ml-2 lg:ml-0 bg-accent1 hover:bg-accent2 disabled:bg-thinAccent text-white font-light text-sm uppercase rounded animate__animated animate__slideInRight"
			disabled={disabledButton}
			type="button">Next Step</button
		>
	{:else}
		<button
			on:click|preventDefault={handleSubmit}
			class="relative px-12 lg:px-24 py-4 lg:py-6 ml-2 lg:ml-0 bg-accent1 hover:bg-accent2 disabled:bg-thinAccent text-white font-light text-sm uppercase rounded animate__animated animate__slideInRight"
			disabled={disabledButton}
			type="button">Submit</button
		>
	{/if}
</div>
