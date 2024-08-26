import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          lg: "795px",
        },
      },
      backgroundColor: {
        primary: "#FFFFFF",
        gray: "#F3F1EF",
        brand: "#9BBBFC",
        overlay: "#00000065",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) -8.4%, rgba(155, 187, 252, 0.20) 104.34%)",
      },
      colors: {
        typography: {
          primary: "#101319",
          secondary: "#83868C",
          tertiary: "#B1B4BA",
          brand: "#4741A6",
          "on-color": "#FFFFFF",
        },
        primary: {
          "lightest-02": "#F7FBFE",
          lightest: "#D7E8FE",
          lighter: "#C3DAFE",
          light: "#B4CEFD",
          DEFAULT: "#9BBBFC",
          dark: "#718FD8",
          darker: "#4E69B5",
          darkest: "#314792",
          "darkest-02": "#091146",
        },
        secondary: {
          "lightest-02": "#F3F2FE",
          lightest: "#BEBAF6",
          lighter: "#9690E4",
          light: "#736DC9",
          DEFAULT: "#4741A6",
          dark: "#342F8E",
          darker: "#342F8E",
          darkest: "#171460",
          "darkest-02": "#04032E",
        },
        tertiary: {
          "lightest-02": "#FEFDF3",
          lightest: "#FEF2C3",
          lighter: "#FDE8A5",
          light: "#FBDE8E",
          DEFAULT: "#F9CE69",
          dark: "#D6A84C",
          darker: "#B38534",
          darkest: "#906521",
          "darkest-02": "#452206",
        },
        ghost: {
          primary: {
            10: "#9BBBFC10",
            20: "#9BBBFC20",
            30: "#9BBBFC30",
            40: "#9BBBFC40",
          },
          secondary: {
            10: "#4741A610",
            20: "#4741A620",
            30: "#4741A630",
            40: "#4741A640",
          },
          tertiary: {
            10: "#F9CE6910",
            20: "#F9CE6920",
            30: "#F9CE6930",
            40: "#F9CE6940",
          },
        },
      },
      height: {
        header: "80px",
      },
      lineHeight: {
        h1: "41px",
        p: "27px",
      },
      flex: {
        equal: "1 0 0",
      },
    },
  },
  plugins: [],
};
export default config;
