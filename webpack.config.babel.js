import path from 'path';
import webpack from 'webpack';

// webpack-dev-server options used in gulpfile
// https://github.com/webpack/webpack-dev-server

module.exports = {
  contentBase: path.resolve(__dirname, 'app'),

  cache: true,

  entry: {
    app: './app/scripts/app.js'
  },

  output: {
    path: path.join(__dirname, '.tmp', 'scripts'),
    publicPath: '.tmp/scripts/',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },

  module: {
     // preLoaders: [{
      // test: /\.js$/,
      // exclude: /(node_modules|bower_components)/,
      // loader: 'eslint-loader'
    // }],

    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }],

    resolve:{
      extensions: ['', '.js']
    },

    modulesDirectories: ['src', 'src/js', 'web_modules', 'bower_components', 'node_modules'],

    alias:{
    },

    plugins: []
  }
};
