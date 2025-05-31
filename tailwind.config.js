/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./screens/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: {
					DEFAULT: '#f3f4f6',
					dark: '#111827',
				},
				foreground: {
					DEFAULT: '#111827',
					dark: '#f3f4f6',
				},
			},
		},
	},
	plugins: [],
	important: true,
	corePlugins: {
		preflight: false,
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	experimental: {
		optimizeUniversalDefaults: true,
	},
	safelist: ['bg-black', 'flex-1', 'items-center', 'justify-center'],
};
