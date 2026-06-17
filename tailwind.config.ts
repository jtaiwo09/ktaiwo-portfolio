import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[class="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#66E1DB", // teal accent (dark mode)
        secondary: "#0B1A32", // deep navy (page bg dark / text light)
        info: "#CBD5F6", // soft lavender (headings on dark)
        warning: "#8892AF", // muted slate (body/secondary text)
        accent: "#112240", // raised navy surface (dark cards)
        brand: "#15803d", // green-700, the light-mode accent
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      fontSize: {
        xxs: "13px",
      },
      lineHeight: {
        normal: "1.3",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
