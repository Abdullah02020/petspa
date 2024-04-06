/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#512772",
        secondary: "#3F7A8C",
        dec: "#3D3D3D",
        bordercolor: "#512772",
        yellow: "#FFC65C",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "770px",
      lg: "990px",
      xl: "1700px",
    },
  },
  plugins: [],
};
