const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				bodyBackground: '#012a4a'
			},
			fontFamily: {
				circular: ['Circular Std Book']
			}
		}
	},

	plugins: []
};

module.exports = config;
