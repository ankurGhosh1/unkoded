/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      primary: "#222222",
      primaryDark: "#1a1a1a",
      secondary: "#5a5a5a",
      accent: "#ff4133",
      optional: "#3d3d3d",
      third: "#2a2a2a",
      white: "#fff",
      gray: "#767676",
      textGray: "#9a9a9a",
      footer: "#1e1e1e",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": { min: "1690px" },
      "max-lg": { max: "1024px" },
      "max-md": { max: "768px" },
      "max-sm": { max: "576px" },
    },
    extend: {
      boxShadow: {
        custom:
          "0 0 1px 0.5px rgba(0,0,0,.08), 0 0 1px 0 rgba(0,0,0,.08), 0 3px 3px -1px rgba(0,0,0,.08), 0 0 0 0.5px hsla(0,0%,100%,.19)",
        ctaShadow:
          "0 1px 16px rgba(0,0,0,.5), inset 0 1px 0 hsla(0,0%,100%,.2), inset 0 -1px 0 rgba(0,0,0,.2)",
        glow: "0 0 40px rgba(255,255,255,.15)",
        card: "0 20px 40px -20px rgba(0,0,0,.5), 0 0 0 1px hsla(0,0%,100%,.08)",
      },
      dropShadow: {
        ctaTextShadow: "0 3px 12px rgba(0,0,0,.26)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: ".4" },
          "50%": { opacity: ".8" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
