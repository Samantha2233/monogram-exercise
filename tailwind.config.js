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
      dropShadow: {
        white: "0px 0px 20px white",
      },
      keyframes: {
        type: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
        },
        fadeInFromBottom: {
          "0%": {
            marginTop: "30px",
            opacity: 0,
          },
          "100%": {
            marginTop: 0,
            opacity: 1,
          },
        },
      },
      animation: {
        type: "type 7.5s steps(60, end)",
        fadeInFromBottom: "fadeInFromBottom 1s ease-in-out",
      },
      animationDelay: {
        "1.5s": "1.5s",
        "2s": "2s",
        "2.5s": "2.5s",
        "3s": "3s",
        "7s": "7s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
