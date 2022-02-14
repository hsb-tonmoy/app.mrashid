<script>
	import { correct } from '$lib/svg/dashboard';
</script>

<h3 class="font-semibold text-3xl text-lightText">Consultant Notes</h3>
<div class="notes flex flex-col gap-y-6 mt-8">
	<div class="note flex items-center p-3 shadow-md shadow-gray-100 rounded-md gap-x-2">
		<span class="bg-green-600 w-5 h-5 p-1 text-white rounded-md">{@html correct}</span><span
			class="text-gray-400 text-sm line-through decoration-red-700 decoration-2"
			>You need to re-upload your SSC transcript</span
		>
	</div>
	<div class="note flex items-center p-3 shadow-md shadow-gray-100 rounded-md gap-x-2">
		<span class="bg-green-600 w-5 h-5 p-1 text-white rounded-md">{@html correct}</span><span
			class="text-gray-400 text-sm line-through decoration-red-700 decoration-2"
			>The CommonApp Essay needs a revision</span
		>
	</div>
	<div class="note flex items-center p-3 shadow-md shadow-gray-100 rounded-md gap-x-2">
		<span class="bg-gray-200 w-5 h-5 p-1 text-white rounded-md" /><span
			class="text-lightText text-sm">ISFAA is not complete yet</span
		>
	</div>
	<div class="note flex items-center p-3 shadow-md shadow-gray-100 rounded-md gap-x-2">
		<span class="bg-gray-200 w-5 h-5 p-1 text-white rounded-md" /><span
			class="text-lightText text-sm">You need to submit the CSS profile to Bates College</span
		>
	</div>
</div>
