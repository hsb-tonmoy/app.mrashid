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

<fieldset class="flex text-sm text-accent2 font-normal mt-8 lg:mt-16">
	<input class="form-input" type="text" name="firstname" id="firstname" />
	<label for="firstname">First name</label>
</fieldset>

<style lang="postcss">
</style>
