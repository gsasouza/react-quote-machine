/* eslint-disable */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const common = require('./webpack.common');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: common.entry,
  output: common.output,

  module: {
    rules: [common.loaders.babel,]
  },

  plugins: [
    new CleanPlugin([common.paths.build], { verbose: false }),
    new HtmlWebpackPlugin(common.plugins.html),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
      minChunks(module, count) {
        var context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      }
    })
  ]
};
