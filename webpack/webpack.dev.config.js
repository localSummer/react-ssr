const path = require('path');
const webpack = require('webpack');

const resolve = (pathStr) => path.resolve(__dirname, pathStr);

module.exports = {
  mode: 'development',
  entry: resolve('../src/client/app/index.jsx'),
  output: {
    path: resolve('../dist/static'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.less'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
    }),
  ],
};
