/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        grenzegotisch: ["grenze gotisch", "serif"],
      },
    },
    plugins: [],
  },
};
