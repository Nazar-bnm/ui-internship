
const path = require('path');

module.exports = {
  entry: ['./src/app/index.js'],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './src/app/',
    host: 'localhost',
    port: '3000',
    open: true,
    liveReload: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
