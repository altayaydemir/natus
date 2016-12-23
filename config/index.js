const path = require('path');

module.exports = {
  path: path.resolve(__dirname, '../config'),
  input: path.resolve(__dirname, '../src'),
  output: path.resolve(__dirname, '../dist'),
  port: process.env.PORT || 8000,
  host: process.env.HOST || 'localhost',
  env: process.env.NODE_ENV || 'development',
  apiURL: 'https://api.put.io/v2',
  client_id: 2691,
  redirect_uri: 'http://localhost:8000/auth',
};
