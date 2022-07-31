/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bb: {
          light: "#1C94C4",
          DEFAULT: "#1E576D",
          dark: "#0D678A",
        },
      },
      padding: {
        10: "100px",
      },
    },
  },
  plugins: [],
};
