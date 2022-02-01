const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				lightBodyBackground: 'rgba(250, 252, 254, 1)',
				lightText: 'rgba(23, 28, 44, 1)',
				lightTextBody: 'rgba(91, 97, 124, 1)',
				accent1: 'rgba(91, 58, 204, 1)',
				accent2: 'rgba(120, 57, 243, 1)',
				accent3: 'rgba(57, 59, 227, 1)',
				thinAccent: 'rgba(198, 197, 254, 1)'
			},
			width: {
				120: '30rem'
			},
			inset: {
				12.5: '12.5%'
			},
			fontFamily: {
				circular: ['Circular Std Book']
			}
		}
	},

	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class'
		})
	]
};

module.exports = config;
