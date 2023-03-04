/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "valentine",
      {
        blue: {
          "base-100": "#99bbf5",
          primary: "#2a79f8",
          neutral: "#2a79f8",
          secondary: "#E7E7E7",
          info: "#53C0F3",
          success: "#71EAD2",
          warning: "#F3CC30",
          error: "#E24056",
          accent: "#F3CC30",
        },
        purple: {
          "base-100": "#dcc2ff",
          primary: "#5d20ac",
          neutral: "#5d20ac",
          secondary: "#E7E7E7",
          info: "#53C0F3",
          success: "#71EAD2",
          warning: "#F3CC30",
          error: "#E24056",
          accent: "#F3CC30",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
