/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3490dc",
          secondary: "#ffed4a",
          accent: "#38c172",
          neutral: "#f4f4f9",
          "base-100": "#ffffff",
          // Add or override other color keys
        },
      },
    ],
  },
};
