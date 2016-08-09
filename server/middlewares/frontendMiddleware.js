const path = require('path');
const pkg = require(path.resolve(process.cwd(), 'package.json'));
/**
 * Front-end middleware
 */

// 開発用 middleware
const addDevMiddlewares = (app, express, webpackConfig) => {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
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
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: false,
    quiet: false,
    silent: true,
    stats: defaultStatsOptions
  });

  // veiw setting
  app.set('views', './app');
  app.set('view engine', 'pug');
  // assets
  app.use(express.static('app/assets'));

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  // webpackDevMiddlewareのは生成物を保持するために内部でmemory-fsを使用するので、
  // 代わりにfsを使用する
  const fs = middleware.fileSystem;

  /* npmにあるファイルをキャッシュする的なやつかな・・
  if (pkg.dllPlugin) {
    app.get(/\.dll\.js$/, (req, res) => {
      const filename = req.path.replace(/^\//, '');
      res.sendFile(
        path.join(process.cwd(), pkg.dllPlugin.path, filename)
      );
    });
  }
  */

  app.get('/', function (req, res) {
    res.render('index', {});
  });

  // app.get('*', (req, res) => {
  //   console.log(compiler.outputPath);
  //   fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
  //     if (err) {
  //       res.sendStatus(404);
  //     } else {
  //       res.send(file.toString());
  //     }
  //   });
  // });
};

module.exports = (app, express) => {
  const webpackConfig = require('../../webpack.config.development.babel');
  addDevMiddlewares(app, express, webpackConfig);
  return app;
};

