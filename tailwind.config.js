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
    },
  },
  plugins: [],
};
