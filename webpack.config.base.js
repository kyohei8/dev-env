const path = require('path');

module.exports = {
  contentBase: path.resolve(__dirname, 'app'),

  cache: true,

  entry: [],

  target: 'web',

  output: {
    path: path.join(__dirname, '.tmp', 'scripts'),
    // devServerのパス
    publicPath: '/scripts/',
    filename: '[name].bundle.js',
    chunkFilename: '[chunkhash].js',
    sourceMapFilename: '[name].map'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
        loaders: ['eslint']
      }, {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riotjs-loader',
        query: {
          template: 'jade'
        }
      }
    ],

    loaders: [{
      test: /\.(js|tag)$/,
      exclude: /node_modules/,
      include: __dirname,
      loaders: ['babel']
    }, {
      test: /\.(jpg|png|gif|jpeg|svg)([\?]?.*)$/,
      loaders: ['url?limit=100000']
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
