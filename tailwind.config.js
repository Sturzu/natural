const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        body: "#222831",
        primary: "#FFD369",
        secondary: "#393E46",
        accent: "#eee",
      },
      backgroundImage: {
        hero: 'url("https://images.pexels.com/photos/17238967/pexels-photo-17238967/free-photo-of-ferma.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      },
    },
  },
  plugins: [],
};
