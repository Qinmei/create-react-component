const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelConfig = require('../babel.config.json');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './template/index.html'),
  filename: './index.html',
});

console.log(babelConfig);

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './template/index.tsx'),
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          [
            'babel-loader',
            {
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      modules: false,
                    },
                  ],
                  '@babel/preset-typescript',
                  '@babel/preset-react',
                ],
                plugins: [
                  [
                    '@babel/plugin-proposal-decorators',
                    {
                      legacy: true,
                    },
                  ],
                ],
              },
            },
          ],
        ],
        exclude: /node_modules(?!\/crc-scripts)/,
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
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: ['.ts', '.tsx', '...'],
  },
  devServer: {
    port: 2333,
    host: '0.0.0.0',
  },
};
