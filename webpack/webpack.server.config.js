const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'development',
  target: 'node',
  entry: resolvePath('../src/server/app/index.js'),
  output: {
    filename: 'app.js',
    path: resolvePath('../dist/server'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.less'],
  },
  externals: [nodeExternals()], // externals来排除不需要打包的模块，因为 node 端会自动载入这些包，可以让打包的文件更小
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
      __SERVER__: true,
    }),
  ],
};
