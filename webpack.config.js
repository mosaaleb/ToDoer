const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const exclude = [path.resolve(__dirname, 'dist')];
console.log(exclude);

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index.js'),
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
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ToDoer',
      template: path.join(__dirname, 'src','hbs', 'index.hbs')
    })
  ]
};