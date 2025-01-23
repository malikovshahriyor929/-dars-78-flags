/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/*.{html,js}","./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F75F4",
      },
    },
  },
  plugins: [],
};
