/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#f9fafb",
        "gray-900": "#111827",
        white: "#fff",
        "gray-2001": "#e5e7eb",
        gainsboro: {
          "100": "#e4e7eb",
          "200": "#e0e0e0",
          "300": "#e4e3e8",
        },
        darkgray: {
          "100": "#9aa5b1",
          "200": "#9ca3af",
          "300": "#a9a9a9",
        },
        "gray-500": "#6b7280",
        mediumblue: {
          "100": "#012bdd",
          "200": "#002bdd",
        },
        "gray-700": "#374151",
        black: "#000",
        dimgray: "#52606d",
        "gray-100": "#f3f4f6",
        whitesmoke: {
          "200": "#f6f7fa",
          "300": "#f0f2f5",
          "400": "#eef0f3",
          "500": "#e8eaed",
          "600": "#ebedf0",
          "700": "#ededf1",
        },
        darkslategray: {
          "100": "#3e4350",
          "200": "#263238",
        },
        "indigo-50": "#eef2ff",
        "indigo-600": "#4f46e5",
        "gray-300": "#d1d5db",
        papayawhip: "#fff3d6",
        chocolate: "#db7d23",
        "primary-500": "#3b82f6",
        "gray-200": "#e2e8f0",
        "gray-600": "#475569",
        black1: "#2b3674",
        "gray-400": "#94a3b8",
        "blue-100": "#dbeafe",
        "blue-800": "#1e40af",
        seagreen: "#059669",
        crimson: "#ef4444",
        lavender: "#e0e7ff",
        "gray-800": "#1f2937",
        black2: "#0f0f0f",
        mediumseagreen: "#34d399",
        "gray-6001": "#4b5563",
        silver: "#babbbf",
        blueviolet: "#9747ff",
        lightslategray: "#8e949f",
        "indigo-500": "#6366f1",
        lightsteelblue: "#c4d7ff",
        cornflowerblue: "#6e96fe",
      },
      spacing: {},
      fontFamily: {
        "text-sm-leading-5-font-normal": "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "6xs": "7px",
        "5xl": "24px",
        "10xs": "3px",
        sm: "14px",
        "4xl": "23px",
        "3xs-5": "9.5px",
        "4xs-6": "8.6px",
        "6xs-4": "6.4px",
        "45xl": "64px",
        "232xl": "251px",
        "6xl": "25px",
        "4xs-1": "8.1px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      "9xl": "28px",
      mini: "15px",
      sm: "14px",
      xl: "20px",
      "3xs": "10px",
      lg: "18px",
      "5xl": "24px",
      smi: "13px",
      "xs-2": "11.2px",
      "xs-3": "11.3px",
      "11xl": "30px",
      "13xl": "32px",
      inherit: "inherit",
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
