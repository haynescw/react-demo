const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.js')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'app'),
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'react-hot-loader'
      }
    ]
  }
})
