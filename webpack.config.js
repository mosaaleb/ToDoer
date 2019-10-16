const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const exclude = [path.resolve(__dirname, 'dist')];
console.log(exclude);

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'js', 'index.js'),
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
        loader: 'handlebars-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: { 
          name: 'images/[name].[ext]',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
  ]
};