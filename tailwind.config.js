/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "crate-blue": "#00A6D1",
        "crate-navigation-bg": "#262626",
        "crate-navigation-fg": "#e5e5e5",
      },
    },
  },
  plugins: [],
};
