import WebpackNotifierPlugin from 'webpack-notifier';
import baseConfig from './webpack.config.base';
import webpack from 'webpack';

const config = Object.create(baseConfig);
config.entry = [
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
  './app/scripts'
];

config.debug = true;
config.devtool = '#source-map';

config.plugins.push(new WebpackNotifierPlugin());
config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NoErrorsPlugin());
config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development')
}));

export default config;
