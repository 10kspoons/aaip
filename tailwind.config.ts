import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066FF",
          50: "#E6F0FF",
          100: "#CCE0FF",
          200: "#99C2FF",
          300: "#66A3FF",
          400: "#3385FF",
          500: "#0066FF",
          600: "#0052CC",
          700: "#003D99",
          800: "#002966",
          900: "#001433",
        },
        navy: {
          DEFAULT: "#0A1628",
          50: "#E8EAF0",
          100: "#C5CAD6",
          200: "#8B95AC",
          300: "#516082",
          400: "#2D3B55",
          500: "#0A1628",
          600: "#081220",
          700: "#060E18",
          800: "#040A10",
          900: "#020508",
        },
        accent: {
          DEFAULT: "#00D4FF",
          50: "#E6FBFF",
          100: "#CCF7FF",
          200: "#99EEFF",
          300: "#66E6FF",
          400: "#33DDFF",
          500: "#00D4FF",
          600: "#00AACC",
          700: "#007F99",
          800: "#005566",
          900: "#002A33",
        },
        cta: {
          DEFAULT: "#FF9500",
          50: "#FFF5E6",
          100: "#FFEBCC",
          200: "#FFD699",
          300: "#FFC266",
          400: "#FFAD33",
          500: "#FF9500",
          600: "#CC7700",
          700: "#995900",
          800: "#663C00",
          900: "#331E00",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
