<script>
	import { createEventDispatcher } from 'svelte';

	let dispatch = createEventDispatcher();
	import Toastify from 'toastify-js';
	import 'toastify-js/src/toastify.css';

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
		ielts,
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

	function notificationToast(status) {
		Toastify({
			text:
				status === 'success'
					? 'Your answer has been successfully submitted. It is pending approval by the moderators.'
					: 'Something went wrong, please try again later',
			close: false,
			duration: 5000,
			gravity: 'top',
			position: 'center',
			offset: {
				x: 0,
				y: 60
			},
			style: {
				background:
					status === 'success'
						? 'linear-gradient(to right, #40916c, #52b788)'
						: 'linear-gradient(to right, #d90429, #ef233c)'
			}
		}).showToast();
	}

	$: data = {
		destination: $destination,
		degree: $degree,
		firstname: $firstname,
		lastname: $lastname,
		email: $email,
		phone: $phone,
		social_media: $social_media,
		major: $major,
		education: $education,
		ielts: $ielts,
		message: $message
	};

	async function handleSubmit() {
		try {
			const res = await fetch(API_URL + 'student_data/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			if (res.status === 201) {
				handleNext();
			} else {
				notificationToast('error');
				console.log(await res.json());
			}
		} catch (err) {
			console.log(err);
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
