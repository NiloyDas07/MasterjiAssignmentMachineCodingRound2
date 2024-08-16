/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmseriftext: ["DM Serif Text", "sans-serif"],
        donegalone: ["Donegal One", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        randomuser: "url('/src/assets/images/RandomUserBackground.png')",
        randomjokes: "url('/src/assets/images/RandomJokesBackground.png')",
        catslisting: "url('/src/assets/images/CatsListingBackground.png')",
      },
    },
  },
  plugins: [],
};
