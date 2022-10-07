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
        richLemon: "#FDF500",
        electricBlue: "#37EBF3",
      },
      backgroundImage: {
        "banner-main": "url('/banner-main.webp')",
        "divider-main": "url('/divider-main.svg')",
        "divider-main-horizontal": "url('/divider-main-horizontal.svg')",
        "divider-articles-top": "url('/divider-articles-top.svg')",
        "divider-articles-bottom": "url('/divider-articles-bottom.svg')",
        "divider-title-text": "url('/divider-title-text.svg')",
        "divider-article-title-dark": "url('/divider-article-title-dark.svg')",
        "divider-article-title-light":
          "url('/divider-article-title-light.svg')",
      },
    },
  },
  plugins: [],
};
