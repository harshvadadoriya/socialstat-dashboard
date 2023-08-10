/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-red-light': 'rgb(255, 242, 242)',
				'primary-red-dark': 'rgb(255, 91, 90)',
			},
		},
	},
	plugins: [],
};
