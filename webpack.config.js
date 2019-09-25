/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
/*
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractCSS = new ExtractTextPlugin('main.min.css');
/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        extractComments: 'all',
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        },
      }),
    ],
  },
  mode: 'development',
  entry: {
    test: './src/app/index.js',
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin(
    {
      template: path.resolve(__dirname, 'src/app/index.html'),
      inject: 'body',
    }
  )],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss)$/,
        loader:
          extractCSS.extract([
            {loader: 'css-loader', options: {sourceMap: true, modules: true}},
            {loader: 'postcss-loader', options: {sourceMap: true}},
            {loader: 'sass-loader', options: {sourceMap: true}}]),
      },
    ],
  },
  plugins: [
    extractCSS,
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true,
    },
  },

  devServer: {
    publicPath: '/',
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
