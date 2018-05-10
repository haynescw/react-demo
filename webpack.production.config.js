const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./webpack.config.js')
const path = require('path')

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.[chunkhash].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ],
      },
    ],
  },

  plugins: [
    // Extract imported CSS into own file
    new MiniCssExtractPlugin('[name].bundle.[chunkhash].css'),
    // Minify JS
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        compress: {
          inline: false,
        },
      },
    }),
    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
})