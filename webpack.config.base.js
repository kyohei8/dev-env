import path from 'path';

export default {
  contentBase: path.resolve(__dirname, 'app'),

  cache: true,

  entry: [],

  output: {
    path: path.join(__dirname, '.tmp', 'scripts'),
    // devServerのパス
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
      test: /\.js$/,
      exclude: /node_modules/,
      include: __dirname,
      loaders: ['babel']
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

  plugins: []
};
