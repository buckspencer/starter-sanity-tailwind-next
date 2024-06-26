import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/{app,ui}/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				ink: '#000',
				canvas: '#fff',
			},
			fontFamily: {
				sans: ['Lora', 'serif'],
			},
			maxHeight: {
				fold: 'calc(100svh - var(--header-height))',
			},
		},
	},
	plugins: [
		require('tailwindcss-patterns'),
		plugin(function ({ addVariant }) {
			addVariant('header-open', 'body:has(#header-open:checked) &')
			addVariant('header-closed', 'body:has(#header-open:not(:checked)) &')
		}),
	],
	safelist: ['action', 'ghost'],
}

export default config
