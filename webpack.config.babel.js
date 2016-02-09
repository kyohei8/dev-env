import WebpackNotifierPlugin from 'webpack-notifier';
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
      exclude: /(node_modules)/,
      include: __dirname,
      loaders: ['eslint']
    }],

    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      include: __dirname,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0']
      }
    }],

    modulesDirectories: ['src', 'src/js', 'web_modules', 'node_modules'],

    alias:{}
  },

  eslint: {
    fix: true
  },

  resolve:{
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
