import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    }, colors: {
      primary: {
        light: "#fce7f3", // pink-100
        DEFAULT: "#f9a8d4", // pink-300
        dark: "#ec4899", // pink-500
        bg: "#f8fafc",
        white: "#fff",
      },
      secondary: {
        light: "#fbcfe8", // pink-200
        DEFAULT: "#f472b6", // pink-400
        dark: "#db2777", // pink-600
      },
      accent: {
        light: "#be185d", // pink-700
        DEFAULT: "#9d174d", // pink-800
        dark: "#831843", // pink-900
      },
    },
  },
  plugins: [],
};
export default config;
