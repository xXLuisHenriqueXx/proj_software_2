/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        highlight: "#316A41",
        primary: "#131313",
        secondary: "#373737",
        contrast: "#FEFEFE",
        backgroundPrimary: "#FAF9F6",
        backgroundSecondary: "#EBEEEC",
        cancel: "#BA1A1A",
        alert: "#FF5800",
      },

      fontFamily: {
        redHatDisplayRegular: ["RedHatDisplay_400Regular"],
        redHatDisplayMedium: ["RedHatDisplay_500Medium"],
        redHatDisplaySemiBold: ["RedHatDisplay_600SemiBold"],
        redHatDisplayBold: ["RedHatDisplay_700Bold"],
      },
    },
  },
  plugins: [],
};
