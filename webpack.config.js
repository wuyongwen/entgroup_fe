/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

var isDevelopment = process.env.NODE_ENV === 'development';

var configuration = {
  entry: {
    'home/home': './public/home/home.js',
    'book/book': './public/book/book.js',
  },
  node: {
    __filename: true,
    __dirname: true,
  },
  output: {
    path: './build',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel!eslint?quiet=true' },
      { test: /\.json$/, loader: 'json' },
    ],
  },
  progress: true,
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'base', filename: 'base/base.js' }),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: isDevelopment,
    })
  ],
};

module.exports = configuration;
