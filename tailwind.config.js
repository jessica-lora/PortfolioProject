/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    scale: {
      0: "0",
      10: ".10",
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    extend: {
      colors: {
        "my-teal": "#86a69d",
        "my-lt-orange": "#f2b263",
        "my-white": "#f2e8df",
        "my-lt-pink": "#f2c6c2",
        "my-pink": "#695173",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

/// bg-my-teal
