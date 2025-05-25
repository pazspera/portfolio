import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#C9F4F9",
          200: "#99E8F0",
          300: "#70D4DE",
          400: "#39BBC8",
          500: "#0FA3B1",
          600: "#108A96",
          700: "#096771",
          800: "#074F57",
          900: "#033035",
        }
      }
    }
  }
}

export default config;