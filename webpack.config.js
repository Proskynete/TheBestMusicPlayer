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
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true, sourceMapContents: true } },
          { loader: 'sass-loader', options: { sourceMap: true, sourceMapContents: true } },
        ],
      },
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
