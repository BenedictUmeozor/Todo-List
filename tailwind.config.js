/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        lightModeBg: "#faf9f6",
        darkModeBg: "#333",
        lightModeText: "#111",
        darkModeText: "#fff",
        lightModeElement: "#fff",
        darkModeElement: "#222",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
