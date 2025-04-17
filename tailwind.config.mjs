/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "100%",
				md: "100%",
				lg: "520px",
				xl: "620px"
			},
			padding: '2rem',
		},
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
			colors: {
				// Light mode colors
				'light-theme': '#E9EBEC',
				'primary-light': '#df5757',
				'primary-hover-light': '#ff7863',

				// Dark mode colors
				'dark-theme': '#0C151D',
				'primary-dark': '#bfbfbf',
				'primary-hover-dark': '#df5757',

				// Neutrals
				'n200': '#1f1f1f',
				'n900': '#222222',
				'n700': '#172939',
				'n500': '#bfbfbf',
			},
    	}
    },
	plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}
