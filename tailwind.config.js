module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],

  theme: {
    extend: {},
    fontSize: {
      "3xs": "10px",
      base: "16px",
      sm: "14px",
      lg: "18px",
      "9xl": "28px",
      mini: "15px",
      "xs-2": "11.2px",
      "13xl": "32px",
      "5xl": "24px",
      xs: "12px",
      "xs-3": "11.3px",
      xl: "20px",
      smi: "13px",
      "11xl": "30px",
    },

  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
