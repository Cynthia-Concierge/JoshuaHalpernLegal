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
					50: "#f8fafc",
					100: "#f1f5f9",
					300: "#94a3b8",
					500: "#1e3a5f",
					600: "#172f4f",
					700: "#0f2440",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
