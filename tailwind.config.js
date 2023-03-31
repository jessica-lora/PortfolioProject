/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "my-teal": "#86a69d",
        "my-lt-orange": "#f2b263",
        "my-white": "#f2e8df",
        "my-lt-pink": "#f2c6c2",
        "my-pink": "#f28585",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

/// bg-my-teal
