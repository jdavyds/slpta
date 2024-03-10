/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#370D66",
        secondary: "#03464A",
        dark: "#001E1D",
        red: "#CB1F52",
        green: "#0A8800",
        pitch: "#029099",
      },
    },
  },
  plugins: [],
};
