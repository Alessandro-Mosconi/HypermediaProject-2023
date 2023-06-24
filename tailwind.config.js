/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      lineHeight: {
        '2xs' : '0.75rem',
      },
      fontSize: {        
        '2xs' : '0.65rem',
        },
      backgroundPosition: {
        'center-down': 'center -.5%'
        }
      }
      
  },
  plugins: [],
}

