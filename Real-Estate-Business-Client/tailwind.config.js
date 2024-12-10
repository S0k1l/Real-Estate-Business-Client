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
        white: {
          DEFAULT: "#fff",
          90: "#E4E4E7",
          95: "#F1F1F3",
          97: "#F7F7F8",
          99: "#FCFCFD",
        },
        purple: {
          60: "#703BF7",
          65: "#8254F8",
          70: "#946CF9",
          75: "#A685FA",
          90: "#DBCEFD",
          95: "#EDE7FE",
          97: "#F4F0FE",
          99: "#FBFAFF",
        },
      },
      boxShadow: {
        "inset-1-gray-custom": "inset 0px 0px 0px 1px #262626",
        "inset-1-gray-top-custom": "inset 0 1px 0 #262626",
        "10-gray-custom": "0px 0px 0px 10px #191919",
        "4-gray-custom": "0px 0px 0px 4px #191919",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
