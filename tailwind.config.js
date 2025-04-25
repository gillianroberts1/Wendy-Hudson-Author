/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)", //beige

        foreground: "#080705", // general text color

        accent: "#98A95D", // cucumber
        "accent-foreground": "",

        secondary: "",
        black: "#080705",
      },
      fontSize: {},
      fontFamily: {
        sans: ["Karla",  "sans-serif"],
        heading: ["Montserrat", "sans-serif"],

      },
      fontWeight: {},
      spacing:{
        '80': "80px"

      },
    },
  },
  plugins: [],
};
