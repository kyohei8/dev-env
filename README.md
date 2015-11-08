# [WIP] FrontEnd Development Environment for ME!

🚧👷 WIP 👷🚧

brand new my frontend dev env.

## Introduction

### JavaScript
* writing ES2015
* To Compiled using babel and webpack.
* linting with eslint

### CSS
* writing sass
* To Compiled gulp-sass(libsass)
* `app/assets/images/sprites/` images in are summarized in one of the sprite image in spritesmith

### HTML
* writing jade

## Requirements
Install some middlewares.

* Nodejs w/npm (>= 4.0)
* Bower `npm install -g bower`
* gulp `npm install -g gulp`

## Install

Install dependencies.

```sh
$ npm install
```
```sh
$ bower install
```

### npm or bower
We are using a two package management system. But basically is to use the npm.
If there is no package to npm, it will use the bower.

## Usage

### local
```sh
$ npm start
```
To launch local server, `app` and ` .tmp` as the root directory.

### product(dist)
```sh
$ npm run build
```
To launch local server, `dist` as the root directory.

### unit test
```sh
$ npm run test
```
To launch local server, `test` as the root directory.
