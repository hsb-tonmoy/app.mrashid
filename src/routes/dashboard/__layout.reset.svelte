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
		correct
	} from '$lib/svg/dashboard';

	let selected = true;

	const timeline_options = [
		{ title: 'Account Creation', icon: folder, active: true },
		{ title: 'File Opening', icon: folder, active: false },
		{ title: 'Document Submission', icon: folder, active: false },
		{ title: 'College Application', icon: folder, active: false },
		{ title: 'Reception of I-20', icon: folder, active: false },
		{ title: 'SEVIS Payment', icon: folder, active: false },
		{ title: 'DS-160 Submission', icon: folder, active: false },
		{ title: 'Visa Fee Payment', icon: folder, active: false }
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
		<div class="column w-[300px] relative  border-r-2 timeline-border">
			<!-- Timeline Start -->
			<div class="timeline_wrapper relative">
				{#each timeline_options as item}
					<div
						class="timeline_item flex justify-end items-center relative pr-[48px] pb-[32px] pl-[30px]"
					>
						<div class="title text-right">
							<h2 class="font-medium">{item.title}</h2>
						</div>
						<div
							class={`${
								item.active ? 'timeline-icon-active' : 'timeline-icon'
							} relative flex w-[52px] h-[52px] ml-[20px] justify-center items-center rounded-full z-10`}
						>
							<span class="w-7 h-7">{@html item.icon}</span>
						</div>
						<div
							class="symbol absolute left-auto top-auto right-[-11px] bottom-auto w-5 h-5 border-4 bg-green-600 border-green-600 rounded-full z-auto"
						>
							<span class="w-4 h-4 text-white">{@html correct}</span>
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
	<div id="main" class="flex w-[56vw] bg-[#FCFBFE] py-20"><slot /></div>
	<aside class="flex w-[25vw py-20]">notes</aside>
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
</style>
