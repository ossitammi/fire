/**
 * Webpack production specific build configurations
 */

const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  entry: ['./src/index.js'],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
});
