/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
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
        "gray-500": "#6b7280",
        "blue-100": "#dbeafe",
        "blue-800": "#1e40af",
        dimgray: "#52606d",
        whitesmoke: {
          "100": "#f9fafb",
          "200": "#f6f7fa",
          "300": "#f0f2f5",
          "400": "#eef0f3",
        },
        blueviolet: {
          "100": "#9747ff",
        },
        "indigo-600": {
          "200": "#4f46e5",
        },
        "gray-700": "#374151",
        black: "#000",
        "primary-500": "#3b82f6",
        "gray-200": "#e5e7eb",
        "gray-600": "#475569",
        black1: "#2b3674",
        "gray-400": "#94a3b8",
        "gray-900": "#111827",
        mediumseagreen: "#34d399",
        "gray-100": "#f3f4f6",
        "gray-300": "#d1d5db",
        papayawhip: "#fff3d6",
        chocolate: "#db7d23",
        lightsteelblue: "#c4d7ff",
        cornflowerblue: "#6e96fe",
        "indigo-50": "#eef2ff",
        "indigo-500": "#6366f1",
      },
      fontFamily: {
        "text-xs-leading-4-font-medium": "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "10xs": "3px",
        "5xl": "24px",
        sm: "14px",
        "4xl": "23px",
        "3xs-5": "9.5px",
        "6xl": "25px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      "9xl": "28px",
      mini: "15px",
      smi: "13px",
      sm: "14px",
      xl: "20px",
      "3xs": "10px",
      "xs-3": "11.3px",
      "5xl": "24px",
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
