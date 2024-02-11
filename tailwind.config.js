module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        lime: { 200: "#ebdd90", 400: "#dec74a" },
        blue_gray: { 100: "#d9d9d9" },
        gray: {
          300: "#e1dfdf",
          500: "#99a0a8",
          800: "#3a3a3a",
          900: "#1a1a1a",
        },
        amber: { 600: "#d7b600" },
        red: { 200: "#df9aac" },
        light_green: { 50: "#f3f3eb", 300: "#bdd592" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        teal: { 100: "#b1cdda", 200: "#8abdd6" },
        green: { 400: "#73ac77" },
        pink: { 100: "#ebbfc5" },
      },
      fontFamily: {
        gluten: "Gluten",
        sarabun: "Sarabun",
        roboto: "Roboto",
        roundedmplusc: "Rounded Mplus 1c",
      },
      boxShadow: { bs: "inset 0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
