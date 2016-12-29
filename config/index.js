const path = require('path');

const env = process.env.NODE_ENV || 'development';

const config = {
  path: path.resolve(__dirname, '../config'),
  input: path.resolve(__dirname, '../src'),
  output: path.resolve(__dirname, '../dist'),
  port: process.env.PORT || 8000,
  host: process.env.HOST || 'localhost',
  env,
  apiURL: 'https://api.put.io/v2',
  client_id: env === 'development' ? 2694 : 2691,
  redirect_uri: env === 'development' ? 'http://localhost:8000/auth' : 'http://natus.zipzip.top/auth',
};

module.exports = config;
