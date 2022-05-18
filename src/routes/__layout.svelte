<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return {
				status: 302,
				redirect: '/dashboard'
			};
		}

		return {};
	}
</script>

<script>
	import '../app.css';
</script>

<svelte:head><title>app.mrashid.net - Dr. Rashid's US Scholarship Mentoring</title></svelte:head>

<main class="bg-lightBodyBackground h-screen">
	<div class="flex flex-col w-full max-w-screen-2xl mx-auto px-6 lg:px-8 2xl:px-0">
		<header
			class="flex flex-col lg:flex-row justify-between items-center py-4 lg:py-12 mb-32 md:mb-0"
		>
			<div id="logo">
				<a href="/" class="text-accent2 font-medium text-lg lg:text-xl"
					><img class="w-36" src="/logo.png" alt="app.mrashid.net" /></a
				>
			</div>
			<div id="promotion">
				<a
					class="flex items-center gap-x-2"
					href="https://www.facebook.com/mrashidpage"
					target="_blank"
				>
					<img
						src="/images/play-button.png"
						alt="play button"
						class="w-8 h-8 animate__animated animate__headShake animate__slow animate__infinite"
					/>
					<span class="text-sm lg:text-base text-accent2 opacity-70"
						>Hear from Dr. Rashid himself</span
					>
					<img
						class="cta-arrow absolute top-[7%] lg:top-[3%] w-20 h-20 lg:w-32 lg:h-32"
						src="/images/pointing-arrow.svg"
						alt="pointing arrow"
					/>
				</a>
			</div>
		</header>
	</div>
	<slot />
</main>

<style>
	:global(:root) {
		--header-height: 8vh;
		--footer-height: 7vh;
	}

	header {
		height: var(--header-height);
	}
</style>
