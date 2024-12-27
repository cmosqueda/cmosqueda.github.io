/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["helvetica", "arial", "sans-serif"],
        inter: ["Inter", "arial", "sans-serif"],
        poppins: ["Poppins", "arial", "sans-serif"],
        roboto: ["Roboto", "arial", "sans-serif"],
        robotoMono: ["Roboto Mono", "arial", "sans-serif"],
      },
      // gridTemplateColumns: {
      //   "auto-fit": "repeat(auto-fit, minmax(100px, 1fr))",
      //   "auto-fill": "repeat(auto-fill, minmax(100px, 1fr))",
      // },
    },
  },
  plugins: [],
};
