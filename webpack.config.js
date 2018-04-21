const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    path: path.resolve(__dirname, './public/'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public/',
    port: 8080,
    compress: true,
    inline: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src/'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({ template: './src/index.html' })],
};

module.exports = config;
