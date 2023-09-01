/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx,cjs,mjs}"],
  safelist: [
    "max-w-[880px]",
    "max-w-[1216px]",
    "auto-cols-[calc((100%/1)-3px)]",
    "auto-cols-[calc((100%/2)-6px)]",
    "auto-cols-[calc((100%/3)-9px)]",
    "auto-cols-[calc((100%/4)-12px)]",
    "auto-cols-[calc((100%/5)-15px)]",
    "auto-cols-[calc((100%/6)-18px)]",
    "gap-[12px]",
    "gap-[13px]",
    "gap-[14px]",
    "gap-[15px]",
    "gap-[16px]",
    "gap-[17px]",
    "gap-[18px]",
    "gap-[19px]",
    "gap-[20px]",
    "gap-[21px]",
    "gap-[22px]",
    "gap-[23px]",
    "gap-[24px]",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-315": "linear-gradient(315deg, var(--tw-gradient-stops))",
      },
      fontFamily: {
        open: "Open Sans, sans-serif",
        nunito: "Nunito Sans, sans-serif",
        inter: "Inter, sans-serif",
      },
      keyframes: {
        rotateDownToTop: {
          "0%": {
            transform: "rotate(45deg)",
          },
          "100%": {
            transform: "rotate(225deg)",
          },
        },
      },
      animation: {
        arrow: "rotateDownToTop 0.5s ease-in",
      },
    },
  },
  plugins: [require("daisyui")],
};
