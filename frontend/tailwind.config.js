/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx, html}",
    "./src/components/**/*.{js,ts,jsx,tsx, html}",
    // "./src/pages/**/*.{js,ts,jsx,tsx, html}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        cream: "#FAF5E5",
        "black-dark": "#271718",
        "black-translucent": "#00000026",
        "dark-gray-translucent": "#00000040",
        "light-gray": "#E2E2E2",
        "medium-gray": "#BFBFBF",
        green: "#1F6D29",
        "cherry-red": "#DC1E1D",
        "golden-orange": "#FFB521",
        "dark-brown": "#281815",
        "lavender-purple": "#A682E6",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        display: ["Bebas Neue", "sans-serif"],
      },
    },
    plugins: [require("@tailwindcss/typography")],
  },
};
