import gulp from 'gulp';

// app直下のディレクトリを移動
gulp.task('extras', () => {
  gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});
