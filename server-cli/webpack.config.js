var path = require('path');

var config = {
  context: path.join(__dirname, 'js'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: '/',
  },
};
module.exports = config;
