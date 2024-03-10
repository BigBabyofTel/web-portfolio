/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        orbit: {
          "0%": { transform: "translate(0%)" },
          "20%": { transform: "translate(75%)" },
          "40%": { transform: "translate(150%)" },
          "60%": { transform: "translate(225%)" },
          "80%": { transform: "translate(300%)" },
          "100%": { transform: "translate(375%)" },
        },
      },
    },
    animation: {
      orbit: "orbit 5s linear 1s infinite",
    },
    plugins: [],
  },
};
