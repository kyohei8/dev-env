import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';

// スプライト対象の画像
const imgSrc = 'app/images/sprites/*.png';
// spritesmithのオプション
const spriteOpt = {
  imgName        : 'sprites.png',   // スプライト画像
  retinaImgName  : 'sprites@2x.png',
  retinaSrcFilter: ['app/images/sprites/*@2x.png'],
  imgPath        : '../images/sprites.png', // sassに記載されるパス
  retinaImgPath  : '../images/sprites@2x.png',
  cssName        : '_sprite.scss', // 出力されるcssとそのフォーマット
  cssFormat      : 'scss_retina',
  padding        : 10
};

// スプライト画像、CSSを作成
gulp.task('sprite', () => {
  const spriteData = gulp.src(imgSrc).pipe(spritesmith(spriteOpt));
  spriteData.img.pipe(gulp.dest('app/images'));
  spriteData.css.pipe(gulp.dest('app/styles/modules/'));
});
