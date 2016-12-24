// Core
const config = require('../');
const webpack = require('webpack');
const baseConfig = require('./base');

// Helpers
const merge = require('lodash.merge');

// Constants
module.exports = merge({}, baseConfig, {
  devtool: 'eval',

  entry: {
    main: [
      `webpack-dev-server/client?http://${config.host}:${config.port}`,
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      'babel-polyfill',
      './src/index.jsx',
    ],
  },

  output: merge(baseConfig.output, {
    filename: 'scripts/[name].js',
  }),

  module: {
    loaders: baseConfig.module.loaders.concat([
      {
        test: /\.scss/,
        loaders: [
          'style',
          'css-loader?sourceMap&modules=true&localIdentName=[folder]__[local]',
          'postcss',
          'sass?sourceMap',
        ],
      },
      {
        test: /\.css/,
        loaders: [
          'style',
          'css',
        ],
      },
    ]),
  },

  plugins: baseConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]),
});
