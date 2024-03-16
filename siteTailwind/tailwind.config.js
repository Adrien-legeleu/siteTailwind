/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        xxlInset: " inset 0px -30px 50px 50px black",
        mdInset: " inset 0px -10px 150px 20px black",
      },
      borderRadius: {
        imgCity1: "26% 74% 32% 68% / 86% 21% 79% 14%  ",
        imgCity5: "34% 66% 29% 71% / 63% 10% 90% 37%  ",
        imgCity3: "76% 24% 75% 25% / 17% 73% 27% 83%   ",
        imgCity4: "33% 67% 55% 45% / 38% 24% 76% 62%   ",
        imgCity2: "41% 59% 28% 72% / 65% 51% 49% 35%  ",
        imgCity6: "59% 41% 57% 43% / 26% 49% 51% 74% ",
      },
    },
  },
  plugins: [],
};
