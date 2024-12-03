/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        gray: {
          8: "#141414",
          10: "#1A1A1A",
          15: "#262626",
          20: "#333333",
          30: "#4D4D4D",
          40: "#666666",
          "50-2": "#808080",
          60: "#999999",
        },
      },
      boxShadow: {
        "inset-1-gray-custom": "inset 0px 0px 0px 1px #262626",
      },
    },
  },
  plugins: [],
};
