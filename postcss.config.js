const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production'
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    isProduction && purgecss({
      content: ['./src/templates/*.hbs', './src/js/**/*.js', './src/index.html'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
};