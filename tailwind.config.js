/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--primary-font)",
        secondary: "var(--secondary-font)",
      },
    },
  },
  plugins: [],
};
