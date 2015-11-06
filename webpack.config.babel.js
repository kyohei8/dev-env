import path from 'path';
import webpack from 'webpack';

// webpack-dev-server options used in gulpfile
// https://github.com/webpack/webpack-dev-server

module.exports = {
  contentBase: path.resolve(__dirname, 'app'),

  cache: true,

  devtool: '#source-map',

  entry: [ './app/scripts' ],

  output: {
    path: path.join(__dirname, '.tmp', 'scripts'),
    publicPath: '.tmp/scripts/',
    filename: '[name].bundle.js',
    chunkFilename: '[chunkhash].js',
    sourceMapFilename: '[name].map'
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'eslint-loader'
    }],

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
