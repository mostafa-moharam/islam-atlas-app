/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        container: "rgb(var(--container))",
        border: "rgb(var(--border))",

        text: {
          primary: "rgb(var(--text-primary))",
          secondary: "rgb(var(--text-secondary))",
        },
        foreground: "rgb(var(--text-primary))",
        muted: "rgb(var(--text-secondary))",
        button: {
          primary: {
            DEFAULT: "rgb(var(--button-primary-bg))",
            text: "rgb(var(--button-primary-text))",
          },
          secondary: {
            DEFAULT: "rgb(var(--button-secondary-bg))",
            text: "rgb(var(--button-secondary-text))",
          },
        },
      },
    },
  },
  plugins: [],
};
