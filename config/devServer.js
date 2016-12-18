const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack/dev');
const config = require('./');

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: {
    index: webpackConfig.output.publicPath,
  },
  stats: {
    colors: true,
  },
}).listen(config.port, config.host, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at ${config.host}:${config.port}`);
});
