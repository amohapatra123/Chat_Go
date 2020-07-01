const merge = require('webpack-merge');
const common = require('../webpack.config.common.js');
const Jarvis = require('webpack-jarvis');
const glob = require('glob');
const path = require('path');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new Jarvis({
      port: 1337 // optional: set a port
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin()
  ],
  watch: true
});
