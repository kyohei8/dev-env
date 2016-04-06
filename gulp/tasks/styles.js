// postcss
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import short from 'postcss-short';
import _import from 'postcss-import';
import stylelint from 'stylelint';
import assets from 'postcss-assets';
import reporter from 'postcss-reporter';
import browserSync from 'browser-sync';
import doiuse from 'doiuse';

const $ = gulpLoadPlugins();
const reload = browserSync.stream;

const browsers = [
  'ie >= 11',
  'ff >= 41',
  'chrome >= 45',
  'safari >= 8',
  'ios >= 7',
  'android >= 4.4'
];

const processors = [
  stylelint,
  short,
  _import,
  doiuse({
    browsers,
    ignore: ['flexbox'],
    ignoreFiles: ['**/normalize.css', '**/_sprite.css']
  }),
  assets({
    basePath: 'app/',
    loadPaths: ['assets/images/']
  }),
  cssnext({browsers}),
  reporter({ clearMessages: true })
];

gulp.task('styles', () => {
  return gulp.src('app/styles/**/*.css')
  .pipe($.plumber())
  .pipe($.sourcemaps.init())
  .pipe(postcss(processors))
  .pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest('.tmp/styles'))
  .pipe(reload({match: "**/*.css"}));
});
