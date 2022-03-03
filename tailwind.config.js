/**
 * @author Carlos Guzman
 */

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grey: {
          100: '#122740',
          200: '#5e7187',
          300: '#98a7b9',
        },
        blue: {
          100: '#3370D7',
        },
        red: {
          200: '#D73333',
        },
      },
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
