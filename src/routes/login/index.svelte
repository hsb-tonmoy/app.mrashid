<script>
	import Login from '$lib/auth/Login.svelte';
</script>

<div
	class="login-page flex flex-col justify-center items-center w-full max-w-screen-xl mx-auto mt-16 px-6 lg:px-8 2xl:px-0"
>
	<h2
		class="text-xl lg:text-5xl text-lightText font-semibold drop-shadow"
		style="--animate-duration: 800ms"
	>
		Sign-in to see your dashboard
	</h2>
	<div class="flex items-center gap-x-3 mt-2 ml-2" style="--animate-duration: 1000ms" />
	<Login />
</div>

<style lang="postcss">
	@media screen(lg) {
		.login-page {
			height: calc(100vh - var(--header-height));
		}
	}
</style>
