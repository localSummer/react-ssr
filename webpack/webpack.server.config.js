const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

const isProd = process.env.NODE_ENV === 'production';

process.env.BABEL_ENV = 'node'; // 设置 babel 的运行环境

const plugins = []

if (isProd) {
  plugins.push(
    new webpack.HashedModuleIdsPlugin(),
  )
}

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
      '@dist': path.resolve(__dirname, '../dist'),
    },
  },
  externals: [nodeExternals()], // externals来排除不需要打包的模块，因为 node 端会自动载入这些包，可以让打包的文件更小
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: 'isomorphic-style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            }
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            emitFile: false,
            name: isProd ? 'img/[name].[hash:8].[ext]' : 'img/[name].[ext]',
            publicPath: isProd ? '/' : 'http://localhost:9002',
          },
        },
      },
    ],
  },
  plugins: [
    ...plugins,
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: `"${process.env.NODE_ENV}"` },
      __SERVER__: true,
      __IS_PROD__: isProd,
    }),
  ],
};
