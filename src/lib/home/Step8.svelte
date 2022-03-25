<script>
	import { facebook, google } from '$lib/svg/home';
</script>

<div class="flex flex-col justify-center items-center self-center">
	<h2
		class="animate__animated animate__slideInLeft text-2xl lg:text-5xl text-lightText font-semibold drop-shadow"
		style="--animate-duration: 800ms"
	>
		Congratulations! You're one step closer to achieving your goal!
	</h2>
	<div
		class="animate__animated animate__slideInLeft flex justify-center items-center gap-x-3 mt-6 ml-2"
		style="--animate-duration: 1000ms"
	>
		<p class="text-lightTextBody text-lg lg:text-2xl drop-shadow-sm">
			Please sign-up to get access to your student dashboard.
		</p>
	</div>
	<div class="buttons flex flex-col items-center gap-y-4 mt-10">
		<a
			href="/register"
			class="flex justify-center items-center w-60 h-12 ml-2 lg:ml-0 bg-accent1 hover:bg-accent2 disabled:bg-thinAccent text-white font-light text-sm uppercase"
			>Click Here to Sign Up</a
		>
	</div>
	<img
		src="/images/home-ill-success.svg"
		alt="fly-illustration"
		class="animate__animated animate__zoomInRight absolute bottom-[8vh] right-0 object-cover w-[250px] lg:w-[350px] xl:w-[450px] z-0"
		style="--animate-duration: 1000ms"
	/>
</div>
