// frontend用サーバ
const express = require('express');
const logger = require('./logger');

const argv = require('minimist')(process.argv.slice(2));
const isDev = process.env.NODE_ENV !== 'production';

const setup = require('./middlewares/frontendMiddleware');

const app = express();

const port = argv.port || process.env.PORT || 3000;

setup(app, express);

app.listen(port, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port);
});
