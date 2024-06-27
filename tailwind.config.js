/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#20888F",
        secondary: {
          DEFAULT: "#303030",
          100: "#F47733",
          200: "#FF78BF",
          300: "#20888F",
        },
        textColor: {
          DEFAULT: "#212121",
          subTitle: "#4E4E4E",
          footer: "#C9C9C9",
        },
        bg: {
           DEFAULT: "#F4F4F4",
           black: {
            DEFAULT: "#101010"
           }
           },
        border: {
          DEFAULT: "#A4A4A4",
        },
      },
    },
  },
  plugins: [],
};
