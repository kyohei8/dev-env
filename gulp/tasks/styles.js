import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import handleError from '../utils/handleError';

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

gulp.task('sass-lint', () => {
  gulp.src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sassLint())
    .pipe($.sassLint.format())
});

gulp.task('styles', ['sass-lint'], () => {
  gulp.src('app/styles/**/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', handleError))
    .pipe($.sourcemaps.write({sourceRoot: './'}))
    .pipe($.autoprefixer({browsers}))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});
