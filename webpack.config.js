const path = require('path');

const exclude = [path.resolve(__dirname, 'dist')];
console.log(exclude);

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'source-map-loader',
      exclude
    }]
  },
  devServer: {
    contentBase: 'dist/'
  }
};
