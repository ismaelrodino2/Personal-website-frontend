module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    // colors: {
    //   yellow: '#e9d5a1',
    //   dark: '#353239',
    //   graydark: '#212529',
    //   gray: '#6c757d',
    //   darkyellow: 'rgb(174, 148, 79)',
    //   headerdark: '#494949',
    //   buttondark: 'rgb(53, 53, 53',
    //   sectionsdark: '#212529',
    //   cardsdark: '#6d6d6d',
    // },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      gothic: ['Franklin Gothic', 'sans-serif'],
      opensans: ['opensans-bold', 'sans-serif'],
      lucida: ['Lucida Sans', 'Arial,sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
