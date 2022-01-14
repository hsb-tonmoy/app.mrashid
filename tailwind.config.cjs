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
				sfpro: ['SF Pro Display', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
