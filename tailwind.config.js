/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "200": "#f6f7fa",
          "300": "#f0f2f5",
          "400": "#eef0f3",
          "500": "#e8eaed",
          "600": "#ebedf0",
        },
        mediumblue: {
          "100": "#012bdd",
          "200": "#002bdd",
        },
        white: "#fff",
        gainsboro: "#e4e7eb",
        darkgray: {
          "100": "#9aa5b1",
          "200": "#9ca3af",
        },
        darkslategray: "#3e4350",
        black: "#2b3674",
        dimgray: "#52606d",
        "gray-900": "#111827",
        "gray-200": "#e5e7eb",
        "indigo-600": "#4f46e5",
        "gray-300": "#d1d5db",
        "gray-700": "#374151",
        "gray-500": "#6b7280",
        lightslategray: "#8e949f",
        "gray-600": "#4b5563",
        "gray-50": "#f9fafb",
        blueviolet: "#9747ff",
        "indigo-50": "#eef2ff",
        papayawhip: "#fff3d6",
        chocolate: "#db7d23",
        mediumseagreen: "#34d399",
        "indigo-500": "#6366f1",
        lightsteelblue: "#c4d7ff",
        cornflowerblue: "#6e96fe",
        "gray-6001": "#475569",
        "gray-400": "#94a3b8",
        black1: "#000",
        "primary-500": "#3b82f6",
        "gray-100": "#f3f4f6",
        "blue-100": "#dbeafe",
        "blue-800": "#1e40af",
      },
      fontFamily: {
        "text-sm-leading-5-font-medium": "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "5xl": "24px",
        "6xs-9": "6.9px",
        "10xs": "3px",
        "3xs-5": "9.5px",
        "8xs": "5px",
        "6xl": "25px",
        "4xl": "23px",
        sm: "14px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      "9xl": "28px",
      sm: "14px",
      xl: "20px",
      "3xs": "10px",
      "5xl": "24px",
      mini: "15px",
      smi: "13px",
      "11xl": "30px",
      "xs-3": "11.3px",
      lg: "18px",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
