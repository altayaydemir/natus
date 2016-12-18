// Core
const config = require('../');
const webpack = require('webpack');
const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Config
module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      root: config.input,
      config: path.join(config.path),
      assets: path.join(config.input, 'assets'),
      styles: path.join(config.input, 'assets/styles'),
      images: path.join(config.input, 'assets/images'),
      containers: path.join(config.input, 'containers'),
      components: path.join(config.input, 'components'),
      constants: path.join(config.input, 'constants'),
      helpers: path.join(config.input, 'helpers'),
      routes: path.join(config.input, 'routes'),
      modules: path.join(config.input, 'redux/modules'),
      store: path.join(config.input, 'redux/store'),
      middlewares: path.join(config.input, 'redux/middlewares'),
    },
  },

  output: {
    path: config.output,
    filename: 'scripts/[name].[hash].js',
    publicPath: '/',
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]',
      },
      {
        test: /\.[ot]tf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=fonts/[name].[ext]',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]',
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=1000&name=images/[name].[ext]',
      },
    ],
  },

  postcss: () => ([
    require('autoprefixer'),
  ]),

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(config.env),
      },
    }),

    new HtmlWebpackPlugin({
      template: path.join(config.input, 'index.html'),
      filename: 'index.html',
      chunks: ['main', 'vendor'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ],
};
