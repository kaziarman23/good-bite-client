/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [flowbite.plugin({ charts: true }), require("daisyui")],
  daisyui: {
    themes: [],
  },
};
