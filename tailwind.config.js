// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBg: "#1e3a8a",
        myBgColor: "#f9fafb",
      },
      keyframes: {
        zoomInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        zoom: "zoomInOut 7s ease-in-out infinite",
        "slide-in-left": "slide-in-left 0.4s ease-out forwards",
        "slide-out-left": "slide-out-left 0.4s ease-in forwards",
      },
    },
  },
  plugins: [],
};
