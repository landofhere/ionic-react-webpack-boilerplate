const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.tsx'
  ],
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
  ],
  devServer: {
    hot: true,
  },
};
