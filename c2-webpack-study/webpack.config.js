const path = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      HTMLWebpackPlugin = require('html-webpack-plugin')
      

module.exports = {
  entry: {
    index: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'app/index.js')
    ],
    vendor: ['react','react-dom']
  },
  output:{
    path: path.resolve(__dirname, 'public'), // webpack的build路径
    publicPath: '/assets/', // 你require的路径
    filename: '[name].[hash].js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        loaders: ['react-hot','babel'],
        exclude: path.resolve(__dirname,'node_modules/')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader')
      },
      {
        test:/\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor','vendor.[hash].js'),
    new ExtractTextPlugin('[name].[hash].css'),
    new HTMLWebpackPlugin({
      title: 'keke-react',
      template: './app/index.html'
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
      __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
    })
  ],
  devtool: 'cheap-module-source-map'
}