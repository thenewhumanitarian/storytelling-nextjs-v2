import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        burgundy: {
          50: '#fef2f3',   // Very light
          100: '#f9d7db',  // Light
          200: '#f2a7ae',  // Lighter
          300: '#ea7681',  // Light-medium
          400: '#e25058',  // Medium
          500: '#9f3e52',  // Original burgundy
          600: '#8d3549',  // Slightly darker
          700: '#772c3d',  // Darker
          800: '#602431',  // Even darker
          900: '#491c25',  // Very dark
        },
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        sectra: ['var(--font-gt-sectra)'],
      },
    },
  },
  plugins: [],
};
export default config;
