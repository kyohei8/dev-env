import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import handleError from '../utils/handleError';
import sass from 'gulp-ruby-sass';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const browsers = [
    'ie >= 11',
    'ff >= 41',
    'chrome >= 45',
    'safari >= 8',
    'ios >= 8',
    'android >= 4.4'
  ];

const sassOpt = {
  style: 'expanded',
  noCache: true,
  sourcemap: true,
  loadPath: './'
};

gulp.task('styles', () => {
  return sass('app/styles/**/*.scss', sassOpt)
    .on('error', handleError)
    .pipe($.plumber())
    .pipe($.autoprefixer({browsers}))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});
