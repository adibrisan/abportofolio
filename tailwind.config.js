/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "2xlm": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xlm: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lgm: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      mdm: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      smm: { max: "640px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
