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
          50: '#fef2f3',
          100: '#f9d7db',
          200: '#f2a7ae',
          300: '#ea7681',
          400: '#e25058',
          500: '#9f3e52',
          600: '#8d3549',
          700: '#772c3d',
          800: '#602431',
          900: '#491c25',
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
