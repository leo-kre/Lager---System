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
                        purple: "#9333EA",
                        blue: "#2563EB",
                        orange: "#FF7A00",
                        green: "#22C55E",
                        gray: "#B7BBC3",
                        border: "#EDEDED",
                        background: "#D9DDE6",
                  },
                  screens: {
                        "3xl": "1800px",
                        "2.5xl": "1340px",
                        "0.5xl": "900px",
                        "0.5sm": "450px",
                  },
            },
      },
      plugins: [],
};
