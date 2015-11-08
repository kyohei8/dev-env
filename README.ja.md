# [WIP] FrontEnd Development Environment for ME!

🚧👷 WIP 👷🚧

## Introduction

### JavaScript
* ES2015で記述する
* webpackとbabelを使ってコンパイルされる
* eslintでlintする

### CSS
* sassで記述する
* gulp-sass(libsass)でコンパイルされる
* `app/assets/images/sprites/`にある画像はspritesmithで一つのsprite画像にまとめられる

### HTML
* jadeで記述する

## Requirements
各種ミドルウェアをインストール

* Nodejs w/npm (>= 4.0)
* Bower `npm install -g bower`
* gulp `npm install -g gulp`

## Install

各種ライブラリをインストール

```sh
$ npm install
```
```sh
$ bower install
```

### npm or bower
２つのパッケージ管理システムを使っているが基本的にはnpmを使うようにする。 npmに無いパッケージでbowerにあるものはそちらを利用する。

## Usage

### local
``sh
$ npm start
```
`app`, `.tmp`をルートディレクトリとしてローカルサーバを立てる。

### product
```
$ npm run build
```sh
`dist`をルートディレクトリにローカルサーバを立てる。

### test
```sh
$ npm run test
```
`test`をルートディレクトリにローカルサーバを立てる


---
その他タスク

```
$ gulp extras
```
`/app`ディレクトリ直下のファイルを`/dist`ディレクトリにコピーする。(ドットで始まるファイルも対象となる）

```
$ gulp fonts
```
`/app/fonts`ディレクトリを`/dist/fonts/`と`/.tmp/fonts/`にコピーする。



```
$ gulp styles
```
sassをコンパイルする

```
$ gulp wiredep
```
bowerでインストールしたファイルをscssとhtmlの所定のコメント部分に書き込む
scssファイルの場合はscssに@importとして、
jsファイル、またはcssファイルの場合はhtmlの書くコメント部書くコメント部分に書き込まれる

```
$ gulp html
```
html生成用のタスク
