import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // se seu projeto também usa /app e /components na raiz (como no print)
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066CC",
        secondary: "#1E3A8A",
        accent: "#60A5FA",
        background: "#0F172A",
        textColor: "#F1F5F9",
      },
      fontFamily: {
        mamboe: ["var(--font-mamboe)"],
      },
    },
  },
  plugins: [],
};

export default config;
