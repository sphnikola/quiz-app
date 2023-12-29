/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "1200px",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        "color-text": "#303d50",
        "html-bg-color": "hsla(22, 100%, 96%, 1)",
        "css-bg-color": "hsla(151, 87%, 94%, 1)",
        "js-bg-color": "hsla(223, 100%, 96%, 1)",
        "ascb-bg-color": "hsla(277, 100%, 95%, 1)",
        "link-bg": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
