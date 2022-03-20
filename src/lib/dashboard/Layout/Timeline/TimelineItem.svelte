<script>
	export let route, title, icon, status;

	let status_color_classes = 'border-[#C4C6CC] bg-[#F5F7FB]';

	$: {
		if (status === 1) {
			status_color_classes = 'border-[#C4C6CC] bg-[#F5F7FB]';
		} else if (status === 2) {
			status_color_classes = 'bg-amber-500 border-amber-500';
		} else if (status === 3) {
			status_color_classes = 'bg-emerald-500 border-green-600';
		}
	}
</script>

<div class="timeline-title font-light text-base">
	<a class="inline-flex gap-x-3 text-[#757D8A] items-center drop-shadow-sm" href={route}>
		<span class="w-5 h-5 text-[#757D8A] hover:text-accent1">{@html icon}</span> {title}</a
	>
</div>
<div
	class={`timeline-status cursor-pointer relative w-3 h-3 2xl:w-5 2xl:h-5 p-1 border ${status_color_classes} rounded-full`}
>
	<span class="status" />
</div>

<style>
	:root {
		--subdued-color: rgb(87 83 78);
		--text-color: hsl(200, 100%, 20%);
		--avatar-size: 2.25rem;
		--status-size: 1.25rem;
		--grid-gap: 1.5rem;
		--group-header-spacing: 1rem;
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

	.timeline-status:nth-last-child(1)::after {
		display: none;
	}
</style>
