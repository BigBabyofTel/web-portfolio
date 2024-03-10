/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        orbit: {
          "0%": { transform: "translate(-200%)" },
          "20%": { transform: "translate(-100%)" },
          "40%": { transform: "translate(100%)" },
          "60%": { transform: "translate(250%)" },
          "80%": { transform: "translate(290%)" },
          "100%": { transform: "translate(340%)" },
        },
      },
    },
    animation: {
      orbit: "orbit 9s linear infinite",
    },
    plugins: [],
  },
};
