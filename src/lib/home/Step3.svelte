<script>
	export let personal_fields = {
		name: '',
		phone: '',
		email: '',
		facebook: ''
	};

	export let formHasErrors = false;
</script>

<h2
	class="animate__animated animate__slideInLeft text-xl lg:text-5xl text-lightText font-semibold drop-shadow"
	style="--animate-duration: 800ms"
>
	Please enter your information to continue
</h2>
<div
	class="animate__animated animate__slideInLeft flex items-center gap-x-3 mt-2 ml-2"
	style="--animate-duration: 1000ms"
>
	<span><hr class="w-6 lg:w-10 border-[1.5px] border-lightText" /></span>
	<p class="text-lightTextBody text-sm lg:text-base drop-shadow-sm">
		This will help us serve you better
	</p>
</div>
<img
	src="/images/home-ill-degree.svg"
	alt="fly-illustration"
	class="animate__animated animate__zoomInRight absolute bottom-[8vh] right-0 object-cover w-[200px] lg:w-[350px] xl:w-[550px] z-0"
	style="--animate-duration: 1000ms"
/>

<fieldset class="mt-8 lg:mt-16">
	<div class="flex gap-x-8">
		<span class="relative">
			<input
				id="firstname"
				name="firstname"
				type="text"
				class="peer h-10 w-full border-b-2 border-thinAccent text-xl font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
				placeholder="First name"
			/>
			<label
				for="firstname"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>First name</label
			>
		</span>
		<span class="relative">
			<input
				id="lastname"
				name="lastname"
				type="text"
				class="peer h-10 w-full border-b-2 border-thinAccent text-xl font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
				placeholder="Last name"
			/>
			<label
				for="lastname"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Last name</label
			>
		</span>
	</div>
	<div class="flex gap-x-8 mt-8">
		<span class="relative">
			<input
				id="phone"
				name="phone"
				type="text"
				class="peer h-10 w-full border-b-2 border-thinAccent text-xl font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
				placeholder="Phone no."
			/>
			<label
				for="phone"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Phone no.</label
			>
		</span>
		<span class="relative">
			<input
				id="email"
				name="email"
				type="text"
				class="peer h-10 w-full border-b-2 border-thinAccent text-xl font-semibold text-accent2 placeholder-transparent focus:outline-none focus:border-accent1"
				placeholder="Email address"
			/>
			<label
				for="email"
				class="absolute left-0 -top-3.5 text-thinAccent text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-thinAccent peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-lightText peer-focus:text-base"
				>Email address</label
			>
		</span>
	</div>
</fieldset>

<style lang="postcss">
</style>
