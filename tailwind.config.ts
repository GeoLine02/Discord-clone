import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#404EED",
        bgDarkGray: "#23272A",
        bglightgray: "#F6F6F6",
        secondaryDarkGray: "#313338",
        hoverGray: "#393C41",
      },
    },
  },
  plugins: [],
};
export default config;
