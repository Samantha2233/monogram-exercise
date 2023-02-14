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
      lg: "995px",
      sm: "450px",
    },
    extend: {},
  },
  plugins: [],
};
