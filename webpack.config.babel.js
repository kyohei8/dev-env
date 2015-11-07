import path from 'path';
import webpack from 'webpack';

module.exports = {
  contentBase: path.resolve(__dirname, 'app'),

  cache: true,

  devtool: '#source-map',

  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    './app/scripts'
  ],

  output: {
    path: path.join(__dirname, '.tmp', 'scripts'),
    publicPath: '/scripts/',
    filename: '[name].bundle.js',
    chunkFilename: '[chunkhash].js',
    sourceMapFilename: '[name].map'
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      include: __dirname,
      loaders: ['eslint']
    }],

    loaders: [{
      // test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      include: __dirname,
      loaders: ['babel']
    }],

    resolve:{
      extensions: ['', '.js']
    },

    modulesDirectories: ['src', 'src/js', 'web_modules', 'bower_components', 'node_modules'],

    alias:{}
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
