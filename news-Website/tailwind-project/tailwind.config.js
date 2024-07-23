/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17D6FF",
        secondary: "#FD2ED8",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        imageMove: {
          "0%": { transform: "translatey(-30px)" },
          "100%": { transform: "translatey(30px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out  infinite",
        imageMove: "imageMove 2s infinite alternate",
      },
    },
  },
  plugins: [],
};
