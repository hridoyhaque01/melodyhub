/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "white-30": "rgba(255,255,255,0.3)",
      player: "rgb(21 21 32 / 40%)",
      "dark-30": "rgb(29 30 39 / 30%)",
      "overlay-50": "rgb(24 25 31 / 50%)",
      "dark-50": "rgb(61 61 61 / 50%)",
      "pink-30": "rgba(191,136,255,0.3)",
      darkHigh: "#141520",
      transparent: "transparent",
      black: "#0e0f18",

      blue: "#326fff",
      darkBlue: "#30313a",

      blackHigh: "#2d2d30",

      white: "#fff",
      whiteLow: "#cdcdcd",

      fade: "#727272",
      fadeLight: "#aeaeae",
      fadeLow: "#b3b3b3",

      primaryColor: "#635cff",
      successColor: "#4BB543 ",
      infoColor: "#3498DB ",
      errorColor: "#ff3333",
    },
    backgroundImage: {
      authBg: "url('./assets/images/musicbg.png')",
      melody: "url('./assets/images/melody.png')",
    },
  },
  plugins: [],
};
