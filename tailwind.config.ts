import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(0)" },
        },
        slideOut: {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(100%)" },
        },
    },
    animation: {
        "slide-in": "slideIn 0.5s ease-out",
        "slide-out": "slideOut 0.5s ease-in",
    },
    },
  },
  plugins: [],
};
export default config;
