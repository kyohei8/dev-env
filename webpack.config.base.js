const path = require('path');

module.exports = {
  context: __dirname,

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
    rules: [{
      enforce: 'pre',
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      include: __dirname,
      loader: 'eslint-loader'
    }, {
      test: /\.(js|jsx)$/,
      use: [
        { loader: 'babel-loader' }
      ],
      exclude: /node_modules/,
      include: __dirname,
    }, {
      test: /\.(jpg|png|gif|jpeg|svg)([\?]?.*)$/,
      loader: 'url-loader',
      options: {
        limit: 100000
      }
    }],
  },

  resolve:{
    extensions: ['.js', '.jsx'],
    modules: ['src', 'src/js', 'web_modules', 'node_modules']
  },

  plugins: []
};
