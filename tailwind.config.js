/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#978AF4",
        white: "#fff",
        light2: "#C1B9F9",
        green: "#32FC65",
        green2: "#05EF40",
        backgroundColor: "#2C14DD",
      },
      fontFamily: {
        "Inter-Light": ["Inter-Light"],
        "Inter-ExtraLight": ["Inter-ExtraThin"],
        "Inter-Thin": ["Inter-Thin"],
        "Inter-Regular": ["Inter-Regular"],
        "Inter-Medium": ["Inter-Medium"],
        "Inter-SemiBold": ["Inter-SemiBold"],
        "Inter-Bold": ["Inter-Bold"],
        "Inter-Black": ["Inter-Black"],
        "Inter-ExtraBold": ["Inter-ExtraBold"],
      },
    },
  },
  plugins: [],
};
