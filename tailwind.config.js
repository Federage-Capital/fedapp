/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        mediumblue: {
          "100": "#012bdd",
          "200": "#002bdd",
        },
        "gray-100": "#f3f4f6",
        "gray-900": "#111827",
        "indigo-600": "#4f46e5",
        whitesmoke: {
          "100": "#f9fafb",
          "200": "#f6f7fa",
          "300": "#f0f2f5",
          "400": "#eef0f3",
          "500": "#e8eaed",
        },
        dimgray: "#52606d",
        darkslategray: "#3e4350",
        "gray-500": "#6b7280",
        gainsboro: "#e4e7eb",
        "blue-100": "#dbeafe",
        "blue-800": "#1e40af",
        "gray-700": "#374151",
        black: "#000",
        darkgray: {
          "100": "#9aa5b1",
          "200": "#9ca3af",
        },
        "gray-200": "#e5e7eb",
        "primary-500": "#3b82f6",
        "gray-600": "#475569",
        black1: "#2b3674",
        "gray-400": "#94a3b8",
        mediumseagreen: "#34d399",
        "gray-300": "#d1d5db",
        papayawhip: "#fff3d6",
        chocolate: "#db7d23",
        lightsteelblue: "#c4d7ff",
        cornflowerblue: "#6e96fe",
        blueviolet: "#9747ff",
        "indigo-50": "#eef2ff",
        "indigo-500": "#6366f1",
      },
      fontFamily: {
        "text-base-leading-6-font-normal": "Inter",
      },
      borderRadius: {
        "10xs": "3px",
        "3xs": "10px",
        "5xl": "24px",
        xl: "20px",
        "4xl": "23px",
        "6xs-9": "6.9px",
        "3xs-5": "9.5px",
        sm: "14px",
        "6xl": "25px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      sm: "14px",
      "xs-3": "11.3px",
      xs: "12px",
      lg: "18px",
      "9xl": "28px",
      "3xs": "10px",
      "11xl": "30px",
      mini: "15px",
      smi: "13px",
      "5xl": "24px",
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
