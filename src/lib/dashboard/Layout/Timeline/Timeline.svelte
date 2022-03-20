<script>
	import { session } from '$app/stores';

	import TimelineItem from './TimelineItem.svelte';

	import { home, cog } from '$lib/svg/dashboard';
	import {
		account_creation,
		file_opening,
		document_submission,
		application_submission,
		reception_of_i20,
		sevis_payment,
		ds160,
		visa_fee,
		visa_interview,
		visa_collection,
		pre_departure,
		welcoming_in_the_usa
	} from '$lib/svg/timeline';

	export let student_progress;

	let timeline_options = [
		{
			title: 'Account Creation',
			icon: account_creation,
			status: student_progress.account_creation,
			route: '/dashboard/account_creation/'
		},
		{
			title: 'File Opening',
			icon: file_opening,
			status: student_progress.file_opening,
			route: '/dashboard/file_opening/'
		},
		{
			title: 'Docu Submission',
			icon: document_submission,
			status: student_progress.docu_submission,
			route: '/dashboard/document_submission/'
		},
		{
			title: 'Application Submission',
			icon: application_submission,
			status: student_progress.application_submission,
			route: '/dashboard/application_submission/'
		},
		{
			title: 'Reception of I-20',
			icon: reception_of_i20,
			status: student_progress.i20_reception,
			route: '/dashboard/i20_reception/'
		},
		{
			title: 'SEVIS Payment',
			icon: sevis_payment,
			status: student_progress.sevis_payment,
			route: '/dashboard/sevis_payment/'
		},
		{
			title: 'DS-160 Submission',
			icon: ds160,
			status: student_progress.ds160_submission,
			route: '/dashboard/ds160_submission/'
		},
		{
			title: 'Visa Fee Payment',
			icon: visa_fee,
			status: student_progress.visa_fee,
			route: '/dashboard/visa_fee/'
		},
		{
			title: 'Visa Interview Prep',
			icon: visa_interview,
			status: student_progress.visa_interview,
			route: '/dashboard/visa_interview/'
		},
		{
			title: 'Visa Collection',
			icon: visa_collection,
			status: student_progress.visa_collection,
			route: '/dashboard/visa_collection/'
		},
		{
			title: 'Pre-departure Session',
			icon: pre_departure,
			status: student_progress.pre_dept_session,
			route: '/dashboard/pre_departure/'
		},
		{
			title: 'Welcoming in the USA',
			icon: welcoming_in_the_usa,
			status: student_progress.welcoming_in_us,
			route: '/dashboard/welcome_usa/'
		}
	];
</script>

<div class="profile flex items-center mb-14">
	<div class="profile-image">
		<img
			class="w-16 h-16 object-cover rounded-full border border-white"
			src="https://source.unsplash.com/d1UPkiFd04A"
			alt="profile_pic"
		/>
	</div>
	<div class="flex flex-col justify-center ml-4 mr-10">
		<span class="text-[#757D8A] text-base">Welcome back,</span>
		<span class="text-[#5A6474] font-medium text-xl">{$session.user.first_name}</span>
	</div>
	<div
		class="flex justify-center items-center group w-16 h-12 bg-white hover:bg-heavyPurple border border-[#E1E3E6] hover:border-lightPurple rounded-lg cursor-pointer shadow-sm ease-in-out transition-all duration-300"
	>
		<span class="text-[#757D8A] group-hover:text-white">{@html cog}</span>
	</div>
</div>

<section class="timeline-grid justify-between items-center gap-y-10 px-4">
	{#each timeline_options as timeline_item}
		<TimelineItem
			title={timeline_item.title}
			icon={timeline_item.icon}
			status={timeline_item.status}
			route={timeline_item.route}
		/>
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
		grid-template-columns: fit-content(100%) var(--avatar-size);
		grid-template-rows: auto;

		width: 100%;
		margin: 0 auto;
	}
</style>
