const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    options: {
      whitelist: [
        "bg-red-400",
        "bg-pink-400",
        "bg-blue-400",
        "bg-green-400",
        "bg-yellow-400",
        "bg-gray-400",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
