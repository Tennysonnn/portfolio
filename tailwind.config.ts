import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F5F1",
        "paper-dim": "#ECE9E1",
        ink: "#161A2B",
        "ink-soft": "#565B6E",
        "ink-faint": "#8B8E9C",
        brass: "#B4813E",
        "brass-dim": "#8F6A34",
        teal: "#3C5B54",
        "teal-dim": "#2C433D",
        line: "#D9D4C8",
        "line-dark": "#2A2E3F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
        prose: "38rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        blink: "blink 1.1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
