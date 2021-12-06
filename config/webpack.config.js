const path = require('path');
const autoprefixer = require('autoprefixer');
const { appPath } = require('./paths');

module.exports = {
  mode: 'production',
  entry: path.resolve(appPath, './src/index'),
  output: {
    filename: 'index.js',
    clean: true,
    path: path.resolve(appPath, './lib'),
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
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
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer],
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '...'],
  },
  externals: ['react', 'react-dom'],
};
