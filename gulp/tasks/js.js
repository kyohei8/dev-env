import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import babelify from 'babelify';
import through2 from 'through2';
import {stream as wiredep} from 'wiredep';
import handleError from '../utils/handleError';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const withSourceMap = true;
const destDir = '.tmp/scripts';

gulp.task('js', ['lint'], () => {
  gulp.src('app/scripts/*.js')
  .pipe($.plumber())
  .pipe(destDir)
  .pipe(through2.obj( (file, enc, next) => {
    browserify(file.path, { debug: withSourceMap })
    .transform(babelify)
    .bundle((err, res) => {
      if (err) { return next(err); }
      file.contents = res;
      next(null, file);
    });
  }).on('finish', function(){
    $.util.log(`Finished '${$.util.colors.blue('Browserify')}'`);
  }))
  .on('error', handleError)
  // .pipe($.sourcemaps.init())
  //.pipe($.concat('app.js'))
  // .pipe($.babel())
  // .pipe($.sourcemaps.write())
  .pipe(gulp.dest(destDir))
  .pipe(reload({stream: true}));

});
