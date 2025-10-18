/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1DA1F2', // The signature blue for CTAs and highlights
        'x-dark': '#000000',      // Pure black background
        'x-medium': '#1A1A1A',    // Used for borders/card backgrounds
        'x-text': '#FFFFFF',      // White text for high contrast
        'x-subtext': '#8899A6',   // Subtle grey for secondary text
      },
    },
  },
  plugins: [],
}
