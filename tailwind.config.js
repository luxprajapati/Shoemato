/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
        orbitron: ["Orbitron", "sans-serif"],
        lob: ["Lobster"],
      },
      backgroundColor: {
        customeRed: "#f52b07",
        customeWhite: "#f5f7ed",
      },
      textColor: {
        customeBlack: "#2e2d2d",
        customeGray: "#7c7d79",
      },
    },
  },
  plugins: [],
};
