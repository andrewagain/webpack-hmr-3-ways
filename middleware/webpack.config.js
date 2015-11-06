var path = require('path');
var webpack = require('webpack');

var config = {
  context: path.join(__dirname, 'js'),
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
module.exports = config;
