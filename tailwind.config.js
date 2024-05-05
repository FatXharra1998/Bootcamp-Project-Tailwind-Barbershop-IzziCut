/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Extend the default Tailwind colors and fonts here
      colors: {
        cream: "#f3ffad", // Example of a custom color
        dark: "#333", // Adding a custom dark color for text or backgrounds
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Ensuring Roboto font is correctly setup
        sans: ["Graphik", "sans-serif"], // Example: Adding a new default sans-serif font
        serif: ["Merriweather", "serif"], // Example: Adding a new serif font
      },
      screens: {
        'xs': '375px', // Adding custom breakpoint
      },
      spacing: {
        128: "32rem", // Custom spacing for margin, padding, etc.
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem", // Custom border radius
      },
    },
  },
  plugins: [],
  // Add any Tailwind plugins here if needed
};
