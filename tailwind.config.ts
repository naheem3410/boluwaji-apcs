import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        swirl:  { DEFAULT: "#d4d0c3", dark: "#bfbbb0", light: "#eae8e0" },
        bd:     { DEFAULT: "#235a5c", dk: "#1a4345",   lt: "#2d7275" },
        rust:   { DEFAULT: "#b73612", dk: "#8f280d",   lt: "#cc4a22" },
        tussock:{ DEFAULT: "#c28c3a", dk: "#a07230",   lt: "#d4a555" },
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "Georgia", "serif"],
        inter:    ["'Inter'", "system-ui", "sans-serif"],
      },
      borderRadius: { "4xl": "2rem", "5xl": "2.5rem" },
      keyframes: {
        "fade-up":   { "0%": { opacity:"0", transform:"translateY(32px)" }, "100%": { opacity:"1", transform:"translateY(0)" } },
        "fade-in":   { "0%": { opacity:"0" }, "100%": { opacity:"1" } },
        "slide-left":{ "0%": { opacity:"0", transform:"translateX(40px)" }, "100%": { opacity:"1", transform:"translateX(0)" } },
        "scale-in":  { "0%": { opacity:"0", transform:"scale(0.92)" }, "100%": { opacity:"1", transform:"scale(1)" } },
        shimmer:     { "0%": { backgroundPosition:"200% center" }, "100%": { backgroundPosition:"-200% center" } },
        float:       { "0%,100%": { transform:"translateY(0)" }, "50%": { transform:"translateY(-12px)" } },
        "draw-line": { "0%": { strokeDashoffset:"1000" }, "100%": { strokeDashoffset:"0" } },
        pulse2:      { "0%,100%": { opacity:"0.4", transform:"scale(1)" }, "50%": { opacity:"0.7", transform:"scale(1.05)" } },
      },
      animation: {
        "fade-up":    "fade-up 0.7s ease-out forwards",
        "fade-in":    "fade-in 0.5s ease-out forwards",
        "slide-left": "slide-left 0.7s ease-out forwards",
        "scale-in":   "scale-in 0.5s ease-out forwards",
        shimmer:      "shimmer 3s linear infinite",
        float:        "float 5s ease-in-out infinite",
        "draw-line":  "draw-line 1.5s ease-out forwards",
        pulse2:       "pulse2 3s ease-in-out infinite",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34,1.56,0.64,1)",
      },
    },
  },
  plugins: [],
};
export default config;
