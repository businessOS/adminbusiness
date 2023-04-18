const { colors } = require("tailwindcss/colors");
const { mauve } = require("@radix-ui/colors");

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
        sans: ["var(--font-verdana)"],
      },
      colors: {
        ...colors,
        ...mauve,
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
        "light-sucess": "#65CBA0",
        "dark-sucess": "#65CBA0",
        "light-error": "#E53E3E",
        "dark-error": "#FEB2B2",
        "light-border": "#e6e6ef",
        "dark-border": "#BBBCBE",
      },
      keyframes: {
        slideUpAndFade: {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          "0%": { opacity: 0, transform: "translateX(-2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideDownAndFade: {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          "0%": { opacity: 0, transform: "translateX(2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideUpAndFade: "slideUpAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
        slideDownAndFade:
          "slideDownAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
        slideRightAndFade:
          "slideRightAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
