const path = require('path');
const webpack = require('webpack');

module.exports = {
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
