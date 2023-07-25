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
                        red: "#C33434",
                        green: "#34C38E",
                        purple: "#8D38C2",
                        orange: "#FEA710",
                        border: "#E3E6EA",
                        background: "#F6F7F7",
                  },
            },
      },
      plugins: [],
};
