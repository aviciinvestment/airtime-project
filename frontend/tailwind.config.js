/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#FFCE1A',
        'seconday': '#0D0842',
        'blackBG': '#F3F3F3',
        'Favorite': '#FF5841'
      },
      backgroundImage: {
        'hero-pattern': "url('assets/blue1.jpeg')",
        'more-pattern': "url('assets/airtel.jpeg')",
        'footer-texture': "url('assets/all.jpeg')",
      },
    },
  },
  plugins: [],
}

