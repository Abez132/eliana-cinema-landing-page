import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0F",
          soft: "#17171D",
          deep: "#000000",
        },
        orange: {
          DEFAULT: "#F2801E",
          soft: "#F7A65C",
          deep: "#C4630F",
        },
        cyan: {
          DEFAULT: "#17D1EA",
          soft: "#7CE8F5",
          deep: "#0EA8BE",
        },
        gold: {
          DEFAULT: "#F0B429",
          soft: "#F6D170",
        },
        cream: {
          DEFAULT: "#F7F5F2",
          dark: "#ECE7DF",
        },
        charcoal: "#1C1B1F",
      },
      fontFamily: {
        display: ["var(--font-bebas-neue)", "var(--font-anton)", "sans-serif"],
        script: ["var(--font-yellowtail)", "cursive"],
        body: ["var(--font-poppins)", "sans-serif"],
        ethiopic: ["var(--font-noto-ethiopic)", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "reel-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 4s ease-in-out infinite",
        flicker: "flicker 1.8s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "reel-spin": "reel-spin 12s linear infinite",
        sparkle: "sparkle 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
