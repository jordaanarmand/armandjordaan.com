/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        blenderProHeavy: "BlenderProHeavy",
        blenderProBold: "BlenderProBold",
      },
      colors: {
        steelPink: "#CB1DCD",
        raisinBlack: "#272932",
      },
      backgroundImage: {
        "banner-main": "url('/banner-main.svg')",
      },
    },
  },
  plugins: [],
};
