import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#fca311",
        secondary: "#14213d",
        background: {
          light: "#e5e5e5",
          dark: "#262a2e"
        },
        foreground: {
          light: "#000000",
          dark: "#f5f5f5"
        },
        accent: "#e5e5e5",
      },
    },
  },
  plugins: [],
}

export default config