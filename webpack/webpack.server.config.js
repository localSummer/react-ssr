const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

const isProd = process.env.NODE_ENV === 'production';

process.env.BABEL_ENV = 'node'; // 设置 babel 的运行环境

module.exports = {
  mode: process.env.NODE_ENV,
  target: 'node',
  entry: resolvePath('../src/server/app/index.js'),
  output: {
    filename: 'app.js',
    path: resolvePath('../dist/server'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.less'],
    alias: {
      '@dist': path.resolve(__dirname, '../dist')
    }
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
      'process.env': { NODE_ENV: `"${process.env.NODE_ENV}"`},
      __SERVER__: true,
      __IS_PROD__: isProd,
    }),
  ],
};
