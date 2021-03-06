const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 路径转换
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

process.env.BABEL_ENV = 'development'; // 指定 babel 编译环境

module.exports = {
  mode: 'production',
  devtool: 'none',
  entry: {
    main: resolvePath('../src/client/app/index.jsx'),
  },
  output: {
    path: resolvePath('../dist/static'),
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: '/',
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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]',
              publicPath: '/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(),
    new ManifestPlugin({
      fileName: '../server/asset-manifest.json',
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"production"' },
      __IS_PROD__: true,
      __SERVER__: false,
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
          warnings: false,
          ie8: true,
          output: {
            comments: false,
          },
        },
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        // 抽离第三方库
        libs: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'libs', // 打包后的文件名，任意命名
        },
      },
    },
  },
};
