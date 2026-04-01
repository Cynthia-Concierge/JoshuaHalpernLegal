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
					navy: "#2C5F8D",
					"navy-dark": "#1E4A6F",
					"navy-darker": "#163A58",
					cream: "#FDFBF7",
					"cream-dark": "#F5F1E8",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
