/** @type {import('tailwindcss').Config} */
module.exports = {
      content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
      theme: {
            extend: {
                  backgroundImage: {
                        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                  },
                  colors: {
                        red: "#FF1F3A",
                        purple: "#9333EA",
                        blue: "#2563EB",
                        darkBlue: "#0F42B0",
                        yellow: "#EFDA1D",
                        green: "#22C55E",
                        text_1: "#FFFFFF",
                        text_2: "#B7BBC3",
                        border: "#333333",
                        background: "#000000",
                        background_light: "#070707",
                        card: "#111111",
                  },
            },
      },
      plugins: [],
};
