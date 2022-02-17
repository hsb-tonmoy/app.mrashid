<script>
	import { timeline_options } from './timeline';
	import { logout, horiz_menu } from '$lib/svg/dashboard';
	import { goto } from '$app/navigation';
</script>

<div class="profile flex flex-col justify-center items-center 2xl:gap-y-8 mb-12 2xl:mb-16">
	<!-- <div class="control w-full flex justify-between items-center">
		<div
			on:click={() => {
				goto('/logout');
			}}
			class="logout cursor-pointer group border border-[#dadbdf] hover:border-black hover:bg-black ease-in-out transition-all rounded-full p-4"
		>
			<span class="block text-[#C4C6CC] group-hover:text-white w-5 h-5 rotate-180"
				>{@html logout}</span
			>
		</div>
		<span class="block text-[#C4C6CC] hover:text-black w-6 h-6 rotate-180 cursor-pointer"
			>{@html horiz_menu}</span
		>
	</div> -->
	<div class="flex items-center gap-x-2">
		<img
			class="w-16 h-16 object-cover rounded-full border border-white"
			src="https://source.unsplash.com/d1UPkiFd04A"
			alt="profile_pic"
		/>
		<span class="name text-sm 2xl:text-base font-medium">Hasibuzzaman Tonmoy</span>
	</div>
</div>

<section class="timeline-grid overflow-y-auto">
	{#each timeline_options as timeline_item}
		<div
			class="timeline-title font-normal text-black text-sm pb-4 2xl:pb-6 text-right mt-[0.50rem]"
		>
			<a href={timeline_item.route}> {timeline_item.title}</a>
		</div>
		<div class="timeline-icon relative">
			<a href={timeline_item.route}>
				<img
					src={`/images/dashboard/${timeline_item.icon}.png`}
					alt={timeline_item.icon}
					class="block w-9 h-9 p-1 border-2 border-gray-600 rounded-full"
				/></a
			>
		</div>

		<div
			class={`timeline-status relative mt-[0.50rem] w-3 h-3 2xl:w-5 2xl:h-5 p-1 border ${
				timeline_item.done ? 'bg-emerald-500 border-green-600' : 'border-[#C4C6CC] bg-[#F5F7FB]'
			} ${timeline_item.error ? 'bg-red-500 border-red-500' : ''} rounded-full`}
		>
			<span class="status" />
		</div>
	{/each}
</section>

<style>
	:root {
		--subdued-color: rgb(87 83 78);
		--text-color: hsl(200, 100%, 20%);
		--avatar-size: 2.25rem;
		--status-size: 1.25rem;
		--grid-gap: 1.5rem;
		--group-header-spacing: 1rem;
	}

	.timeline-grid {
		display: grid;
		grid-template-columns: fit-content(100%) var(--avatar-size) var(--avatar-size);
		grid-template-rows: auto;
		gap: var(--grid-gap);
		width: 100%;
		margin: 0 auto;
	}

	.timeline-icon::after {
		content: '';
		position: absolute;
		background-color: var(--subdued-color);
		width: 2px;
		left: 0;
		right: 0;
		margin: 0 auto;
		top: var(--avatar-size);
		bottom: calc(var(--grid-gap) * -1);
	}

	.timeline-status::after {
		content: '';
		position: absolute;
		background-color: #e3e5e9;
		width: 1px;
		left: 0;
		right: 0;
		margin: 0 auto;
		top: var(--status-size);
		bottom: calc(var(--grid-gap) * -4);
	}

	.timeline-icon:nth-last-child(2)::after {
		display: none;
	}

	.timeline-status:nth-last-child(1)::after {
		display: none;
	}
</style>
