const merge = require('webpack-merge');
const common = require('../webpack.config.common.js');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const glob = require('glob');
const path = require('path');
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    // new PurgecssPlugin({
    //   paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true })
    // }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    usedExports: true,
    minimize: true,
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor_app',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  }
});
