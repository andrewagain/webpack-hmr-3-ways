var path = require('path');
var webpack = require('webpack');

var config = {
  context: path.join(__dirname, 'js'),
  entry: [
    './index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
module.exports = config;
