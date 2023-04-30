import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          light: "#0a3827",
          DEFAULT: "#63ECBB",
          dark: "#63ECBB",
        },
      },
    },
  },
  darkMode: ["class", ".chakra-ui-dark"],
  plugins: [],
} satisfies Config;
