import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const minifyHtmlOpt = {
  conditionals: true, // IE条件コメントを消さない
  loose       : true, // 空白文字を削除しない
  quotes      : true  //クオートを削除しない
};

/**
 * jadeタスク
 */
gulp.task('jade', () => {
  gulp.src('app/**/!(_)*.jade')
    .pipe($.debug({title: 'jade Compiled:'}))
    .pipe($.jade({
      pretty: true, //htmlをminifyしない
      cache : true
    }))
    .pipe(gulp.dest('.tmp/'))
    .pipe(reload({stream: true}));
});

// ※ gulp jsを先に実行しておくこと
gulp.task('html', () => {
  const assets = $.useref.assets({
    searchPath: ['{app, !app/scripts', '.']
  });
  const jsCssAssets = $.useref.assets({
    searchPath: ['.tmp']
  });

  return gulp.src('.tmp/*.html')
    .pipe($.debug())
    .pipe(jsCssAssets)
    .pipe($.if('*.js', $.uglify().on('error', $.util.log )))
    .pipe($.if('*.css', $.minifyCss({
      processImport: false,
      compatibility: '*'
    })))
    .pipe(assets)
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml(minifyHtmlOpt)))
    .pipe(gulp.dest('dist'));
});
