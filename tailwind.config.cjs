/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-500": "#8A2BE2",
        "primary-600": "#5D5FEF",
        "secondary-500": "#FFB620",
        "off-white": "#D0DFFF",
        "dark-1": "#000000",
        "dark-2": "#09090A",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "light-1": "#FFFFFF",
        "light-2": "#EFEFEF",
        "light-3": "#7878A3",
        "light-4": "#5C5C7B",
      },
      gridTemplateColumns: {
        custom: 'repeat(3, minmax(290px, 1fr))', 
      }
    },
  },
  plugins: [
    import('@tailwindcss/forms'),
  ],
};
