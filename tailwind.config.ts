import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        primary: "#1D4ED8",
        "primary-dark": "#1E40AF",
        text: "#0F172A",
        "gray-soft": "#64748B",
        "gray-border": "#E2E8F0",
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06)",
      },
      scrollMarginTop: {
        header: "80px",
      },
    },
  },
  plugins: [],
};
export default config;
