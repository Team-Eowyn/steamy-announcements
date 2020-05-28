/* eslint-disable import/no-extraneous-dependencies */
// webpack.config.js
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    concatenateModules: true,
  },
  entry: './client/',
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.(jpe?g|png|gif)$/,
      //   loader: 'url-loader',
      //   options: {
      //     // Inline files smaller than 10 kB (10240 bytes)
      //     limit: 10 * 1024,
      //   },
      // },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   loader: 'image-webpack-loader',
      //   // This will apply the loader before the other ones
      //   enforce: 'pre',
      // },
    ],
  },
};
