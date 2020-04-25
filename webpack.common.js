/**
 * Webpack configurations: https://webpack.js.org/configuration/
 */

const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src')
    }
  }
};
