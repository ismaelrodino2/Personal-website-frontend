module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      gothic: ['Franklin Gothic', 'sans-serif'],
      opensans: ['opensans-bold', 'sans-serif'],
      lucida: ['Lucida Sans', 'Arial,sans-serif'],
    },
    extend: {
      colors: {
        color_yellow: '#e9d5a1',
        color_dark: '#1f1f1f',
        color_gray_dark: '#212529',
        color_gray: '#6c757d',
        color_dark_yellow: '#ae944f',
        color_header_dark: '#494949',
        color_button_dark: '#353535',
        color_sections_dark: '#212529',
        color_sections_gray: '#7f7f7f',
        color_cards_dark: '#6d6d6d',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
