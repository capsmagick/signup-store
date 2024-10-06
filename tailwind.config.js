/** @type {import('tailwindcss').Config} */
import { colors } from 'tailwindcss';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				...colors,
				head: '#222',
				primary: '#FAF9F8',
				second: '#767676',
				third: '#B9A16B',
				fourth: '#EEEEEE',
				footer: '#E4E4E4',
				'second-red': '#C32929'
			}
		}
	},
	plugins: []
};
