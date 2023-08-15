/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Marble:
          "./src/assest/BG/abstract-marble-white-gold-background-wedding-invitation-backdrop_779330-994.webp",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
