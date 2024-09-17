import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "vamp-gradient": "linear-gradient(to bottom, #F6EDEA, #DFEBE9)",
      },
      fontFamily: {
        neutrif: "var(--font-neutrif-studio)", // Using a CSS variable
      },
      colors: {
        primary: "#050505",
        white: "#FAFAFA",
        "white-2": "#FFFFFF",
        "white-3": "#F4F4F4",
        gray: {
          7: "#F1F0EF",
          6: "#E3E0DE",
          5: "#CECBC9",
          4: "#817D7C",
          3: "#2A2727",
          2: "#171615",
        },
        red: "#171615",
        yellow: "#F3CD58",
        green: "#2CB864",
      },
      screens: {
        xs: "440px",
        "2xs": "375px",
      },
    },
  },
  plugins: [],
};
export default config;
