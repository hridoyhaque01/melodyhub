/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "white-30": "rgba(255,255,255,0.3)",
      "dark-30": "rgba(0,0,0,0.3)",
      "dark-50": "rgb(61 61 61 / 50%)",
      "pink-30": "rgba(191,136,255,0.3)",

      transparent: "transparent",
      white: "#fff",

      fade: "#727272",
      fadeLight: "#aeaeae",

      primaryColor: "#635cff",
      successColor: "#4BB543 ",
      infoColor: "#3498DB ",
      errorColor: "#ff3333",
    },
    backgroundImage: {
      authBg: "url('./assets/images/musicbg.png')",
    },
  },
  plugins: [],
};
