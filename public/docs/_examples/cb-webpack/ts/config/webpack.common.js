// #docregion
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  // #docregion entries
  entry: {
    'polyfills': ['es6-shim/es6-shim.js', 'angular2/bundles/angular2-polyfills.js'],
    'vendor': './src/vendor.ts',
    'app': './src/bootstrap.ts'
  },
  // #enddocregion
  
  // #docregion resolve
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  // #enddocregion resolve
  
  // #docregion loaders
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },
  // #enddocregion loaders
  
  // #docregion plugins
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
  // #enddocregion plugins
};
// #enddocregion