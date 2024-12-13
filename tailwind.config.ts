import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#1A1F2C",
        secondary: "#9b87f5",
        accent: "#7E69AB",
        "accent-light": "#D6BCFA",
        background: "#FFFFFF",
        "background-alt": "#F8F9FA",
        text: "#1A1F2C",
        "text-light": "#8E9196",
        purple: {
          100: "#F3F0FF",
          200: "#E9E3FF",
          300: "#D6BCFA",
          400: "#9b87f5",
          500: "#7E69AB",
          600: "#6E59A5",
          700: "#553C9A",
          800: "#44337A",
          900: "#322659",
        },
        gray: {
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#8E9196",
          600: "#6C757D",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Roboto", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%": { 
            opacity: "0",
            transform: "translateY(40px)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in": "fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-in": "slide-in 1s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;