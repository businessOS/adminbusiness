const { colors } = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padd: "1.5rem",
      screen: {
        "2xl": "1360px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        ...colors,
        "light-gold": "#f5bc51",
        "dark-gold": "#533519",
        "light-main": "#FFFFFF",
        "dark-main": "#191925",
        "light-aside": "#E2EAF5",
        "dark-aside": "#0B0B15",
        "light-primary": "#4C70FE",
        "dark-primary": "#4E58EE",
        "light-secondary": "#F0F4FF",
        "dark-secondary": "#3D4756",
        "light-text-main-color": "#000000",
        "dark-text-main-color": "#FFFFFF",
        "light-text-secondary-color": "#000000",
        "dark-text-secondary-color": "#BBBCBE",
        "light-sucess": "#4C70FE",
        "dark-sucess": "#4C70FE",
        "light-error": "#E53E3E",
        "dark-error": "#FEB2B2",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
