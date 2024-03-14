/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": {
          100: "#63687D",
          200: "#1D1F29",
        },
        "gray": {
          100: "#F7F9FF",
          200: "#F1F3FA",
          300: "#E1E4F0",
          400: "#AEB3CB",
          500: "#848BAB",
        },
        "green": {
          100: "#40DB82",
          200: "#1EB589",
        },
        "red": {
          "yt": "#C4032B",
          100: "#DC414C",
        },
        "blue": {
          "fb": "#178FF5",
          "twitter": "#1DA1F2",
          100: "#388FE7",
        },
        "orange": {
          100: "#FDC366",
          200: "#EE877E",
          300: "#DF4896"
        },
      },
      fontFamily: {
        inter: ["'Inter'"]
      }
    },
  },
  plugins: [],
  darkMode: "selector",
}

