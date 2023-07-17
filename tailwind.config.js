/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  safelist: ["btn-normal"],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        dark: {
          primary: "#2563eb",

          secondary: "#4b5563",

          accent: "#374151",

          neutral: "#191D24",

          "base-100": "#2A303C",

          info: "#06b6d4",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
};
