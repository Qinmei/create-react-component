const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelConfig = require('../babel.config.json');
const { appIndex } = require('./paths');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './template/index.html'),
});

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './template/index.tsx'),
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules(?!\/crc-scripts)/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig.env.development,
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]-[hash:base64:6]',
              },
            },
          },
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    htmlWebpackPlugin,
    new webpack.DefinePlugin({
      APPINDEX: JSON.stringify(appIndex),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '...'],
  },
  devServer: {
    port: 2333,
    host: '0.0.0.0',
    hot: true,
  },
};
