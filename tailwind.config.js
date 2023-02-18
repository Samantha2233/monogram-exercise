/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "18px",
      xl: "133px",
    },
    screens: {
      xl: "1350px",
      lg: "995px",
      md: "700px",
      sm: "450px",
    },
    extend: {
      keyframes: {
        scrollMousePt1: {},
        scrollMousePt2: {},
        type: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
        },
      },
      animation: {
        scrollMousePt1: "scrollMousePt1 5s ease-in-out ",
        scrollMousePt2: "scrollMousePt2 5s ease-in-out ",
        type: "type 7.5s steps(60, end)",
      },
    },
  },
  plugins: [],
};
