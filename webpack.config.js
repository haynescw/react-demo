const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ENVIRONMENT = process.env.NODE_ENV

module.exports  = {
  mode: ENVIRONMENT,
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader!resolve-url-loader!sass-loader?sourceMap"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.(gif|jpg|png|svg|eot|otf|ttf|woff(2)?)(\?[^]*)?$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['app']),
    new HtmlWebpackPlugin({
      // Required
      inject: false,
      template: require('html-webpack-template'),
      // template: 'node_modules/html-webpack-template/index.js',

      // Optional
      appMountId: 'app',
      // appMountHtmlSnippet: '<div class="app-spinner"><i class="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i></div>',
      // headHtmlSnippet: '<style>div.app-spinner {position: fixed;top:50%;left:50%;}</style >',
      // baseHref: 'http://example.com/awesome',
      // devServer: 'http://localhost:3000',
      // googleAnalytics: {
      //   trackingId: 'UA-XXXX-XX',
      //   pageViewOnLoad: true
      // },
      // meta: [
      //   {
      //     name: 'description',
      //     content: 'A better default template for html-webpack-plugin.'
      //   }
      // ],
      // mobile: true,
      // lang: 'en-US',
      // links: [
      //   'https://fonts.googleapis.com/css?family=Roboto',
      //   {
      //     href: '/apple-touch-icon.png',
      //     rel: 'apple-touch-icon',
      //     sizes: '180x180'
      //   },
      //   {
      //     href: '/favicon-32x32.png',
      //     rel: 'icon',
      //     sizes: '32x32',
      //     type: 'image/png'
      //   }
      // ],
      // inlineManifestWebpackName: 'webpackManifest',
      // scripts: [
      //   'http://example.com/somescript.js',
      //   {
      //     src: '/myModule.js',
      //     type: 'module'
      //   }
      // ],
      title: 'My Demo React App',
      // window: {
      //   env: {
      //     apiHost: 'http://myapi.com/api/v1'
      //   }
      // }

      // And any other config options from html-webpack-plugin:
      // https://github.com/ampedandwired/html-webpack-plugin#configuration
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/',
      // prevent BrowserSync from reloading the page
      // and let Webpack Dev Server take care of this
      reload: false
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
  ]
}
