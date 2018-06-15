const webpack = require('webpack');
const merge = require('webpack-merge')
const base = require('./webpack.base.conf');
const vueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const webpackNodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProduction = true; //process.env.NODE_ENV === 'production'
module.exports = merge(base, {
  target: 'node',
  devtool: 'source-map',
  entry: './src/entry-server.js',
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: [webpackNodeExternals({
    whitelist: /\.css$/
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        // 重要：使用 vue-style-loader 替代 style-loader
        use: isProduction
        ? ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: 'vue-style-loader'
          })
        : ['vue-style-loader', 'css-loader']
          
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"devlopment"',
      'process.env.VUE_ENV': '"server"'
    }),
    isProduction
    // 确保添加了此插件！
    ? new ExtractTextPlugin({ filename: 'common.[chunkhash].css' })
    : [],
    new vueSSRServerPlugin()
  ]
})