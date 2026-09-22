/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        container: "rgb(var(--container) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",

        text: {
          primary: "rgb(var(--text-primary) / <alpha-value>)",
          secondary: "rgb(var(--text-secondary) / <alpha-value>)",
        },
        foreground: "rgb(var(--text-primary) / <alpha-value>)",
        muted: "rgb(var(--text-secondary) / <alpha-value>)",
        button: {
          primary: {
            DEFAULT: "rgb(var(--button-primary-bg) / <alpha-value>)",
            text: "rgb(var(--button-primary-text) / <alpha-value>)",
          },
          secondary: {
            DEFAULT: "rgb(var(--button-secondary-bg) / <alpha-value>)",
            text: "rgb(var(--button-secondary-text) / <alpha-value>)",
          },
        },
      },
    },
  },
  plugins: [],
};
