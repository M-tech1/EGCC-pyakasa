import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: "#0a1c52",
          light: "#102a78",
          deep: "#07153d",
        },
        gold: {
          DEFAULT: "#c9a23f",
          light: "#e6c873",
          soft: "#d9bd6e",
        },
        ivory: {
          DEFAULT: "#faf5ea",
          deep: "#f3ead6",
        },
        charcoal: {
          DEFAULT: "#26272b",
          soft: "#4a4c54",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
