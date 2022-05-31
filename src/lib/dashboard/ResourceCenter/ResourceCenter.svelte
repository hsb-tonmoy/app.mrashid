<script>
	import { graduation, trend } from '$lib/svg/resource-center';
</script>

<section class="grid gap-6 grid-cols-4">
	<a class="col-span-2 row-span-2" href="/dashboard/resource-center/knowledgebase">
		<div class="card knowledge">
			<div class="card-icon bg-[#49e289]">
				<span class="card-icon-svg text-white">{@html graduation}</span>
			</div>
			<h3 class="card-title">Knowledgebase Central</h3>
			<p class="card-text">Find answers to common questions.</p>
		</div>
	</a>
	<a href="/dashboard/resource-center/happening">
		<div class="card happening">
			<div class="card-icon bg-[#e2498a]">
				<span class="card-icon-svg text-white">{@html trend}</span>
			</div>
			<h3 class="card-title">Happening Now</h3>
			<p class="card-text">
				Stay up-to-date with everything that's happening in higher study abroad.
			</p>
		</div>
	</a>
</section>

<style lang="postcss">
	section {
		grid-template-rows: min-content auto;
	}
	.card {
		@apply flex flex-col justify-end h-64 px-8 py-6 bg-white transition-all ease-in-out duration-500;
		@apply hover:shadow-md;
	}
	.card-icon {
		@apply flex justify-center items-center w-16 h-16 rounded-full;
	}
	.card-icon-svg {
		@apply block h-8 w-8;
	}
	.card-title {
		@apply mt-4 font-circular font-medium text-3xl;
	}
	.card-text {
		@apply mt-2 text-sm text-neutral-500;
	}
	.knowledge {
		box-shadow: 8px 8px 20px 0px rgba(73, 226, 137, 0.2);
		border-width: 0px 0px 1px 0px;
		border-color: #49e289;
	}
	.happening {
		box-shadow: 8px 8px 20px 0px rgba(226, 73, 137, 0.2);
		border-width: 1px 0px 0px 0px;
		border-color: #e2498a;
	}
</style>
