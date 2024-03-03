/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
    colors: {
      bgDark: "#172A3A",
      secondary: "#004346",
      accent: "#09BC8A",
      lightBlue: "#74B3CE"
    },
    fontFamily: {
      font: ["Open Sans", "sans-serif"]
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

