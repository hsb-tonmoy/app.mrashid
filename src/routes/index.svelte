<script>
	import { video } from '$lib/svg/home.js';
	import Step1 from '$lib/home/Step1.svelte';
</script>

<main class="bg-lightBodyBackground">
	<div class="flex flex-col w-full max-w-screen-xl mx-auto">
		<header class="flex justify-between items-center py-8">
			<div id="logo">
				<a href="/" class="text-accent2 font-medium text-xl">app.mrashid.net</a>
			</div>
			<div id="promotion" class="flex items-center gap-x-2">
				<span class="text-accent1">{@html video}</span>
				<span class="text-base text-accent2 opacity-70">Hear from Dr. Rashid himself</span>
			</div>
		</header>
		<section class="body flex flex-col justify-center">
			<Step1 />
		</section>
	</div>
</main>

<style>
	:root {
		--header-height: 8vh;
	}

	header {
		height: var(--header-height);
	}

	.body {
		height: calc(100vh - var(--header-height));
	}
</style>
