const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const {resolve} = require('path');

module.exports = {
  mode: 'production',
  entry: './index.tsx',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: './.env.production',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ],
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
};
