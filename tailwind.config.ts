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
				// Modern minimal palette
				slate: {
					50: "#f8fafc",
					100: "#f1f5f9",
					200: "#e2e8f0",
					300: "#cbd5e1",
					400: "#94a3b8",
					500: "#64748b",
					600: "#475569",
					700: "#334155",
					800: "#1e293b",
					900: "#0f172a",
					950: "#020617",
				},
				blue: {
					50: "#eff6ff",
					100: "#dbeafe",
					500: "#3b82f6",
					600: "#2563eb",
					700: "#1d4ed8",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
