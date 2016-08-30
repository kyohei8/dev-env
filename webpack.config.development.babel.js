const WebpackNotifierPlugin = require('webpack-notifier');
const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');
const glob = require('glob');

const _entry = {};
glob.sync('./app/scripts/*.js').forEach((file) => {
  const matcher = file.match(/scripts\/(.+)\.js/);
  const filename = matcher[1];
  _entry[filename] = [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    file
  ];
});

const config = Object.create(baseConfig);
config.entry = _entry;

config.debug = true;
config.devtool = '#source-map';

config.plugins.push(new WebpackNotifierPlugin());
config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NoErrorsPlugin());
config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development')
}));

module.exports = config;
