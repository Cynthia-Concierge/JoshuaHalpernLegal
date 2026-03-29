import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: { "2xl": "1400px" },
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
			},
			colors: {
				border: "hsl(var(--border))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				brand: {
					gold: "#F5A623",
					"gold-dark": "#D18D1A",
					navy: "#1E3A5F",
					"navy-dark": "#172F4F",
					"navy-darker": "#0F2440",
					cream: "#FDFBF7",
					"cream-dark": "#F5F1E8",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
