module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'body': ['Work Sans', 'sans-serif'],
      },
      boxShadow: {
        // box-shadow: <inset*> <offset-x> <offset-y> <blur-radius*> <spread-radius*> <color*>;
        inner: 'inset -2px 0 10px 0 rgba(0, 0, 0, 0.06)',
      },
      colors: {
        silverGray: '#c5d0eb',
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#284AF6',
          800: '#2c5282',
          900: '#2a4365',
        },
        // <!-- #DBE4FA #DBE4FA #58A3F4 #B3BFD7 #284AF6 #2637AA #E7EBF7-->
      }
    }
  },
  variants: {},
  plugins: []
};
