// Core
const webpack = require('webpack');
const baseConfig = require('./base');

// Helpers
const merge = require('lodash.merge');

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const extractCSS = new ExtractTextPlugin('styles/[name].[hash].css', { allChunks: true });

module.exports = merge({}, baseConfig, {
  debug: false,
  devtool: false,

  entry: {
    main: [
      './src/index.jsx',
    ],
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'redux-form',
      'redux-thunk',
      'react-bootstrap',
      'react-select',
    ],
  },

  module: {
    loaders: baseConfig.module.loaders.concat([
      {
        test: /\.scss/,
        loader: extractCSS.extract(
          'style',
          'css-loader?modules=true&localIdentName=[folder]__[local]!postcss!sass'
        ),
      },
      {
        test: /\.css/,
        loader: extractCSS.extract(
          'style',
          'css'
        ),
      },
    ]),
  },

  plugins: baseConfig.plugins.concat([
    extractCSS,

    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      minimize: true,
      comments: false,
      compress: {
        warnings: false,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
      },
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'scripts/[name].[hash].js',
      minChunks: Infinity,
    }),

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ProgressBarPlugin(),
  ]),
});
