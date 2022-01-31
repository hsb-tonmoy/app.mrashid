<script>
	import {
		grid,
		bell,
		message,
		help,
		chart,
		user,
		settings,
		folder,
		correct,
		warning
	} from '$lib/svg/dashboard';

	let selected = true;

	const timeline_options = [
		{
			title: 'Account Creation',
			icon: folder,
			active: true,
			done: true,
			pending: false,
			error: false
		},
		{
			title: 'File Opening',
			icon: folder,
			active: false,
			done: false,
			pending: true,
			error: false
		},
		{
			title: 'Document Submission',
			icon: folder,
			active: false,
			done: false,
			pending: true,
			error: true
		},
		{
			title: 'College Application',
			icon: folder,
			active: false,
			done: false,
			pending: true,
			error: false
		},
		{
			title: 'Reception of I-20',
			icon: folder,
			active: false,
			done: false,
			pending: true,
			error: false
		},
		{
			title: 'SEVIS Payment',
			icon: folder,
			active: false,
			done: false,
			pending: true,
			error: false
		},
		{
			title: 'DS-160 Submission',
			icon: folder,
			active: false,
			done: false,
			pending: true,
			error: false
		},
		{
			title: 'Visa Fee Payment',
			icon: folder,
			active: false,
			done: false,
			pending: true,
			error: false
		}
	];
</script>

<main class="flex w-full bg-white h-screen">
	<aside class="menu-border flex flex-col items-center w-[4vw] py-20">
		<div id="logo" class="h-[10%]">
			<img class="w-10 h-10" src="/logo.png" alt="app.mrashid.net" />
		</div>
		<div id="menu" class="flex flex-col h-[70%] gap-y-8">
			<span class="menu-icon" class:menu-icon-active={selected}>{@html grid}</span>
			<span class="menu-icon">{@html bell}</span>
			<span class="menu-icon">{@html message}</span>
			<span class="menu-icon">{@html help}</span>
			<span class="menu-icon">{@html chart}</span>
		</div>
		<div id="profile" class="flex flex-col justify-end h-[20%] gap-y-4">
			<span class="menu-icon">{@html user}</span>
			<span class="menu-icon">{@html settings}</span>
		</div>
	</aside>
	<aside class="flex items-center w-[15vw] py-20 px-8 border-r border-r-gray-100 right-shadow">
		<h3 class="absolute top-20 font-bold text-lightText text-3xl">Timeline</h3>
		<div class="column w-[300px] relative border-r-2 timeline-border">
			<!-- Timeline Start -->
			<div class="timeline_wrapper relative">
				{#each timeline_options as item}
					<div
						class="timeline_item flex justify-end items-center relative pr-[48px] pb-[32px] pl-[30px]"
					>
						<div class="title text-right">
							<h2 class="font-base text-sm">{item.title}</h2>
						</div>
						<div
							class={`${
								item.active ? 'timeline-icon-active' : 'timeline-icon'
							} relative flex w-[52px] h-[52px] ml-[20px] justify-center items-center rounded-full z-10`}
						>
							<span class="w-7 h-7">{@html item.icon}</span>
						</div>
						<div
							class={`symbol absolute left-auto top-auto right-[-11px] bottom-auto w-5 h-5 border-4 ${
								item.pending ? 'bg-white' : 'bg-green-600'
							} border-green-600 rounded-full z-auto`}
						>
							<span class="w-4 h-4 text-white">
								{#if item.done}
									{@html correct}
								{/if}
							</span>
						</div>
					</div>
				{/each}
				<div
					class="step-line-venom absolute left-auto top-0 right-[73px] mx-auto h-full bottom-0 w-[3px] timeline-line -z-10"
				/>
				<!-- Timeline End -->
			</div>
		</div>
	</aside>
	<div id="main" class="w-[56vw] bg-[#FCFBFE] py-20"><slot /></div>
	<aside class="flex flex-col w-[25vw] py-20 px-12 border-l border-l-gray-100 left-shadow">
		<h3 class="font-bold text-3xl text-lightText">Expert Notes</h3>
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
	</aside>
</main>

<style lang="postcss">
	.menu-border {
		border: 1px solid transparent;
		border-image: linear-gradient(to bottom, rgb(229 231 235), rgb(249 250 251)) 1;
	}

	.menu-icon {
		@apply text-[#B4BDCB] h-12 w-12 p-2 rounded-lg transition-all duration-300 ease-in-out;
	}

	.menu-icon:hover,
	.menu-icon-active {
		@apply bg-black text-white;
	}

	.right-shadow {
		box-shadow: 0 0 15px rgba(229, 231, 235, 0.2);
		clip-path: inset(0px -15px 0px 0px);
	}

	.left-shadow {
		box-shadow: 0 0 15px rgba(229, 231, 235, 0.2);
		clip-path: inset(0px 0px 0px -15px);
	}

	.timeline-line {
		background-color: rgba(73, 74, 125, 0.32);
		border-color: rgba(73, 74, 125, 0.32);
	}

	.timeline-border {
		border-color: rgba(73, 74, 125, 0.32);
	}

	.timeline-icon {
		@apply text-[#AEAFC5] bg-white border-2 border-[#AEAFC5];
	}

	.timeline-icon:hover,
	.timeline-icon-active {
		@apply text-white bg-[#2db27c];
	}

	.timeline_item:last-child {
		padding-bottom: 0 !important;
	}
</style>
