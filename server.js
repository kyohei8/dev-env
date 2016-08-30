import gulp from 'gulp';
import browserSync from 'browser-sync';
import './gulp/tasks/styles';

import pug from 'pug';
import webpack from 'webpack';
import webpackDevConfig from './webpack.config.development.babel';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const devBundler = webpack(webpackDevConfig);

const defaultStatsOptions = {
  colors: true,
  hash: false,
  timings: false,
  chunks: false,
  chunkModules: false,
  modules: false, // reduce log
  children: true,
  version: true,
  cached: true,
  cachedAssets: true,
  reasons: true,
  source: true,
  errorDetails: true
};

import fs from 'fs';
const indexTmlp = fs.readFileSync('./app/index.pug');

browserSync({
  files          : [
    'app/*.pug',
    'app/images/**/*'
  ],
  notify         : false,
  port           : 9000,
  open           : false,
  reloadOnRestart: true,
  ghostMode      : {
    clicks: false,
    forms: false,
    scroll: false
  },
  server         : {
    baseDir: ['.tmp', 'app'],
    routes: {
      '/node_modules': 'node_modules'
    },
    middleware: [
      {
        route: '/',
        handle: (req, res, err) => {
          const fn = pug.renderFile('./app/index.pug');
          res.end(fn);
        }
      },
      webpackDevMiddleware(devBundler, {
        publicPath: webpackDevConfig.output.publicPath,
        noInfo: false,
        quiet: false,
        stats: defaultStatsOptions
      }),
      webpackHotMiddleware(devBundler)
    ]
  }
});

gulp.watch('app/styles/**/*.css', ['styles']);
