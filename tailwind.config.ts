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
        primary: {
          DEFAULT: "#00e676",
          dark: "#00c853",
          light: "#69f0ae",
        },
        accent: {
          DEFAULT: "#00bcd4",
          light: "#4dd0e1",
        },
        neon: {
          pink: "#ff006e",
          purple: "#8338ec",
          blue: "#3a86ff",
        },
        dark: {
          950: "#020204",
          900: "#050508",
          800: "#0a0a10",
          700: "#0d0d14",
          600: "#12121c",
          500: "#1a1a2e",
          400: "#1e293b",
        },
      },
      fontFamily: {
        sans: ["Noto Sans KR", "system-ui", "sans-serif"],
        display: ["Outfit", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, rgba(0,230,118,0.06) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(0,188,212,0.04) 0px, transparent 50%)",
      },
      boxShadow: {
        neon: "0 0 15px rgba(0,230,118,0.3), 0 0 30px rgba(0,230,118,0.1)",
        "neon-lg":
          "0 0 30px rgba(0,230,118,0.4), 0 0 60px rgba(0,230,118,0.2)",
        "neon-accent":
          "0 0 15px rgba(0,188,212,0.3), 0 0 30px rgba(0,188,212,0.1)",
        glass: "0 8px 32px rgba(0,0,0,0.3)",
        "glass-lg": "0 20px 60px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
