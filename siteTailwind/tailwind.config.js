/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        xxlInset: " inset 0px -30px 50px 50px white",
        mdInset: " inset 0px -10px 150px 20px white",
      },
    },
  },
  plugins: [],
};
