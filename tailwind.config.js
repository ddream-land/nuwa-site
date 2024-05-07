module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          50: "#ebecf0",
          400: "#8a8a8a",
          700: "#525252",
          "100_01": "#c5cad0",
          "900_02": "#373737",
          "50_01": "#edf1f4",
          "900_03": "#343434",
          "900_01": "#333333",
        },
        gray: {
          100: "#f4f4f4",
          200: "#d0d2d8",
          600: "#7c7a7a",
          700: "#555555",
          900: "#181818",
          "700_49": "#5e5e5e49",
          "900_05": "#1c1c1c",
          "900_03": "#161616",
          "900_04": "#212121",
          "600_01": "#828282",
          "900_02": "#1f1f1f",
          "800_99": "#40404099",
          "900_01": "#1e1e1e",
        },
        black: { 900: "#0d0d0d", "900_02": "#0b0b0b", "900_03": "#000000", "900_99": "#00000099", "900_01": "#0f0f0f" },
        white: { A700_01: "#ffffff", A700_e5: "#ffffffe5", A700: "#fdfdfd", A700_6d: "#ffffff6d" },
        yellow: { 800: "#f69232", "800_19": "#f6923219", "900_7f": "#f680107f" },
        indigo: { 50: "#e3e6eb" },
        gray_800: "#4a4a4a",
        gray_800_01: "#4c4c4c",
      },
      boxShadow: { xs: "0px 4px 4px 0px #0000003f", sm: "0px 4px 94px 0px #ffffff" },
      fontFamily: {
        pingfangsc: "PingFang SC",
        sfpro: "SF Pro",
        pangmenzhengdao: "PangMenZhengDao",
        koho: "KoHo",
        pingfangtc: "PingFang TC",
      },
      opacity: { 0.5: 0.5 },
      backgroundImage: {
        gradient: "radial-gradient(133deg, #ffffff,#d0d2d8)",
        gradient1: "radial-gradient(134deg, #ffc690,#f47700)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
