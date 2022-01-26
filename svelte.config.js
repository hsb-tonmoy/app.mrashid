import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ split: false }),
		target: '#svelte',
		vite: {
			optimizeDeps: {
				include: ['svelte-forms']
			}
		}
	},

	preprocess: [preprocess({ postcss: true })]
};

export default config;
