<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return {
				status: 302,
				redirect: '/dashboard'
			};
		}

		return {};
	}
</script>

<slot />
