import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import handleError from '../utils/handleError';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

import webpack from 'webpack';
import webpackConfig from '../../webpack.config.production.babel';

gulp.task('js:cp', () => {
  gulp.src([
    'app/scripts/libs/*',
  ]).pipe(gulp.dest('.tmp/scripts/libs'));
});

// product build
// .tmpにjsファイルを生成
gulp.task('js:prod', ['js:cp'], () => {
  const webpackSetting = webpack(webpackConfig);
  webpackSetting.run((err, stats) => {
    if(err){
      throw new Error('webpack build failed');
    }
    $.util.log(stats.toString({
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: true,
      chunkModules: false
    }));
    reload();
  });
});

