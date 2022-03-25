<script>
	const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
	const GOOGLE_REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

	import { google } from '$lib/svg/home';

	const openGoogleLoginPage = () => {
		const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
		const redirectUri = 'login/google';

		const scope = [
			'https://www.googleapis.com/auth/userinfo.email',
			'https://www.googleapis.com/auth/userinfo.profile'
		].join(' ');

		const params = {
			response_type: 'code',
			client_id: GOOGLE_CLIENT_ID,
			redirect_uri: `${GOOGLE_REDIRECT_URI}/${redirectUri}`,
			prompt: 'select_account',
			access_type: 'offline',
			scope
		};

		const urlParams = new URLSearchParams(params).toString();

		window.location = `${googleAuthUrl}?${urlParams}`;
	};
</script>

<button
	type="button"
	on:click={openGoogleLoginPage}
	class="flex items-center h-12 bg-white text-sm px-4 text-center border border-gray-200 rounded shadow-lg hover:shadow transition-all ease-in-out duration-200"
	><span class="block w-6 h-6">{@html google}</span></button
>
