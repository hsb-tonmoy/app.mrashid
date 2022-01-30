<script>
	import { grid, bell, message, help, chart, user, settings } from '$lib/svg/dashboard';

	let selected = true;
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
	<aside class="flex w-[15vw] py-20 px-8">
		<ol class="relative border-l border-gray-200 dark:border-gray-700">
			<li class="mb-10 ml-6">
				<h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
					Flowbite Application UI v2.0.0 <span
						class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
						>Latest</span
					>
				</h3>
				<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
					>Released on January 13th, 2022</time
				>
				<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
					Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
					and pre-order E-commerce & Marketing pages.
				</p>
				<a
					href="#"
					class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					><svg
						class="w-4 h-4 mr-2"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
							clip-rule="evenodd"
						/></svg
					> Download ZIP</a
				>
				<span
					class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
				>
					<svg
						class="w-3 h-3 text-blue-600 dark:text-blue-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						/></svg
					>
				</span>
			</li>
			<li class="mb-10 ml-6">
				<span
					class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
				>
					<svg
						class="w-3 h-3 text-blue-600 dark:text-blue-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						/></svg
					>
				</span>
				<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
					Flowbite Figma v1.3.0
				</h3>
				<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
					>Released on December 7th, 2021</time
				>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					All of the pages and components are first designed in Figma and we keep a parity between
					the two versions even as we update the project.
				</p>
			</li>
			<li class="mb-10 ml-6">
				<span
					class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
				>
					<svg
						class="w-3 h-3 text-blue-600 dark:text-blue-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						/></svg
					>
				</span>
				<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
					Flowbite Library v1.2.2
				</h3>
				<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
					>Released on December 2nd, 2021</time
				>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					Get started with dozens of web components and interactive elements built on top of
					Tailwind CSS.
				</p>
			</li>
		</ol>
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

	.menu-icon:hover {
		@apply bg-black text-white;
	}

	.menu-icon-active {
		@apply bg-black text-white;
	}
</style>
