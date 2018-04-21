const path = require('path');

const OUTPUT = path.resolve(__dirname, './public/');
const ENTRY = path.resolve(__dirname, './src/main.js');

module.exports = {
  mode: 'development',
  entry: ENTRY,
  output: {
    path: OUTPUT,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: ENTRY,
    port: 8080,
    compress: true,
    inline: true,
  },
}
