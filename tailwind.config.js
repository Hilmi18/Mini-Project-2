/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Lato',
      quick: 'Quicksand'
    },
    container: {
      padding: {
        DEFAULT: '10px',
        // lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      md1: '925px',
      lg: '1024px',
      lg1: '1195px',
      xl: '1200px',
    },
    extend: {
      backgroundImage: {
        hero: "url('assets/img/hero/hero.jpg')",
        service: "url('assets/img/service/bg.png')",
        footer: "url('assets/img/footer/footer.jpg')"
      },
    },
    plugins: [],
  }

}