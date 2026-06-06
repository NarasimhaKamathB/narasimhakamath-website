import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        navy: "#1E3A5F",
        ink: "#1A1A1A",
        mist: "#FAFAF8",
        stone: "#6B6B6B",
        rule: "#E4E4E0",
        chip: "#EEF2F7",
      },
      letterSpacing: {
        widest: "0.18em",
      },
    },
  },
  plugins: [],
};
export default config;
