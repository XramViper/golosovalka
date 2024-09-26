import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D5EFF",
      },
      textColor: {
        primary: "#2D5EFF",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2563eb",
          "primary-content": "#f3f4f6",
          secondary: "#1e40af",
          "secondary-content": "#f3f4f6",
          accent: "#22c55e",
          "accent-content": "#000e03",
          neutral: "#1f2937",
          "neutral-content": "#f3f4f6",
          "base-100": "#111827",
          "base-200": "#0d1320",
          "base-300": "#090f1a",
          "base-content": "#f3f4f6",
          info: "#1e40af",
          "info-content": "#f3f4f6",
          success: "#22c55e",
          "success-content": "#111827",
          warning: "#f59e0b",
          "warning-content": "#150900",
          error: "#dc2626",
          "error-content": "#ffd9d4",
        },
      },
    ],
  },
};
export default config;
