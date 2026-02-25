import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F6F2",
        charcoal: "#1F1F1F",
        champagne: "#C6A972",
        taupe: "#8C857A"
      },
      borderRadius: {
        card: "8px"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(31, 31, 31, 0.06)"
      },
      maxWidth: {
        content: "1240px"
      }
    }
  },
  plugins: []
};

export default config;
