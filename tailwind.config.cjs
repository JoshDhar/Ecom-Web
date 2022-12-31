/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          Accent: "#A18A68",
          White: "#FFFFFF",
          Black: "#000000",
        },
        neutral: {
          DarkGray: "#707070",
          Gray: "#D8D8D8",
          LightGray: "#EFEFEF",
        },
        errors: {
          default: "#D82700",
        },
      },
      fontFamily: {
        txt: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
