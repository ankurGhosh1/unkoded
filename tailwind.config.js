/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    textShadow: {
      ctaTextShadow: "rgba(0,0,0,.26) 0 3px 12px;",
    },
    boxShadow: {
      custom:
        "0 0 1px 0.5px rgba(31,36,48,.08), 0 0 1px 0 rgba(31,36,48,.08), 0 3px 3px -1px rgba(31,36,48,.08), 0 0 0 0.5px hsla(0,0%,100%,.19);",
      ctaShadow:
        "0 1px 16px rgba(80,63,205,.5), inset 0 1px 0 hsla(0,0%,100%,.2), inset 0 -1px 0 rgba(0,0,0,.2);",
    },
    colors: {
      primary: "#1f2430",
      secondary: "#673fd7",
      optional: "#455eb5",
      third: "#292b3f",
      white: "#fff",
      gray: "#767676",
      textGray: "#7c8198",
      footer: "#242837",
    },
    screens: {
      "max-lg": { max: "1024px" },
      "max-md": { max: "768px" },
      "max-sm": { max: "576px" },
      "3xl": { min: "1690px" },
    },
  },
  plugins: [],
};
