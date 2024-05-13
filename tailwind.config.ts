import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[class="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#66E1DB",
        secondary: "#0B1A32",
        info: "#CBD5F6",
        warning: "#8892AF",
        accent: "#112240",
      },
      fontSize: {
        xxs: "13px",
      },
      lineHeight: {
        normal: "1.3",
      },
    },
  },
  plugins: [],
};
export default config;
