const path = require('path');
const cssnext = require('postcss-cssnext');
const short = require('postcss-short');
const _import = require('postcss-easy-import');
const stylelint = require('stylelint');
const assets = require('postcss-assets');
const sprites = require('postcss-sprites').default;
const reporter = require('postcss-reporter');
// const doiuse = require('doiuse');

const browsers = [
  'ie >= 11',
  'ff >= 44',
  'chrome >= 48',
  'safari >= 8',
  'ios >= 7',
  'android >= 4.4',
  'ChromeAndroid >= 45'
];

const processors = [
  _import({
    path: ['node_modules'],
    glob: true
  }),
  short,
  cssnext({browsers}),
  assets({
    basePath: 'app/',
    loadPaths: ['assets/images/'],
    relativeTo: 'app'
  }),
  sprites({
    stylesheetPath: 'app/styles/', //出力するcssのパス
    spritePath: 'app/assets/images',   //スプライト画像を出力する先のパス
    basePath: 'app/',  // urlのベースパス
    relativeTo: 'app',
    retina: true,
    // images/spritesのみスプライトの対象とする
    filterBy(image){
      if(/images\/sprites/.test(image.url)){
        return Promise.resolve();
      }
      return Promise.reject();
    },
    groupBy: function(image) {
      if (image.url.indexOf('@2x') === -1) {
        return Promise.resolve('@1x');
      }
      return Promise.resolve('@2x');
    },
    spritesmith: {
      padding: 10
    },
    hooks: {
      // 出力されるスプライト画像ファイル名を変更する sprite@2xだと同じファイルが量産されるので
      onSaveSpritesheet: function(opts, groups) {
        if(groups[0] === '@1x'){
          // 通常サイズのスプライト
          return path.join(opts.spritePath, '_sprites.png');
        }else{
          // retinaサイズのスプライト
          return path.join(opts.spritePath, '_sprites@2x.png');
        }
      }
    }
  }),
  reporter({ clearMessages: true })
];

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
    }, {
      test: /\.css$/,
      include: path.resolve(__dirname, 'app'),
      loaders: ['style', 'css', 'postcss']
    }, {
      test: /\.(jpg|png|gif|jpeg|svg)([\?]?.*)$/,
      loaders: ['url?limit=100000']
    }],

    modulesDirectories: ['src', 'src/js', 'web_modules', 'node_modules'],

    alias:{}
  },

  resolve:{
    extensions: ['', '.js', '.jsx']
  },

  eslint: {
    fix: true
  },

  postcss: function () {
    return processors;
  },

  plugins: []
};
