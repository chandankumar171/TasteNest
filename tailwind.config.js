/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E8192C",
        yellow: "#FFC224",
        dark: "#1a1a1a",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
};
