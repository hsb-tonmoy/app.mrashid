const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				lightBodyBackground: '#FAFCFE',
				lightText: '#171C2C',
				lightTextBody: '#5b617c',
				accent1: '#5B3ACC',
				accent2: '#7839F3',
				accent3: '#393BE3'
			},
			fontFamily: {
				circular: ['Circular Std Book']
			}
		}
	},

	plugins: []
};

module.exports = config;
