/* eslint-disable global-require, import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import baseConfig, {
  WEBPACK_DEV_SERVER_PORT,
  SRC_PATH, DIST_PATH, PUBLIC_PATH,
} from './webpack.config.base.babel';

const config = {
  ...baseConfig,

  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    `${SRC_PATH}/index`,
  ],

  output: {
    path: path.join(DIST_PATH, 'assets'),
    filename: 'app.js',
    publicPath: PUBLIC_PATH,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
      },
    }),
    new ExtractTextPlugin('[name].css', {
      allChunks: true,
    }),
  ],

  module: {
    ...baseConfig.module,
    loaders: [
      ...baseConfig.module.loaders,
      {
        test: /\.(js|jsx)$/,
        loaders: [
          'react-hot',
          'babel-loader',
          'eslint-loader',
        ],
        include: SRC_PATH,
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    contentBase: `${SRC_PATH}/`,
    historyApiFallback: true,
    hot: true,
    port: WEBPACK_DEV_SERVER_PORT,
    publicPath: PUBLIC_PATH,
    noInfo: false,
    quiet: false,
    lazy: false,
    stats: {
      cached: false,
      chunks: false,
    },
  },

  cache: true,
  debug: true,
  devtool: 'source-map',
  port: WEBPACK_DEV_SERVER_PORT,
};

export default config;
