const path = require('path');
const webpack = require('webpack');

const resolve = (pathStr) => path.resolve(__dirname, pathStr);

module.exports = {
  mode: 'development',
  entry: {
    main: ['react-hot-loader/patch', resolve('../src/client/app/index.jsx')],
  },
  output: {
    path: resolve('../dist/static'),
    filename: '[name].js',
    publicPath: 'http://localhost:9002/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.less'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
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
              importLoaders: 2
            }
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
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"development"' },
      __IS_PROD__: false,
      __SERVER__: false,
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        libs: {
          // 抽离第三方库
          test: /node_modules/, // 指定是node_modules下的第三方包
          chunks: 'initial',
          name: 'libs', // 打包后的文件名，任意命名
        },
      },
    },
  },
};
