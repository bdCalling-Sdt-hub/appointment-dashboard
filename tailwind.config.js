/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#193664",
        secondary: "#E8EBF0",
        btn: "#95C343",
        bgColor: "#475E83",
        textColor: "#5C5C5C",
      },
    },
  },
  plugins: [],
}

