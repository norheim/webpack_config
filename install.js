#! /usr/bin/env node
var path = require('path');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

function bindToApp(app, publicDir, entryPointPath) {
    // Step 1: Create & configure a webpack compiler
    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config').config(publicDir, entryPointPath);
    var compiler = webpack(webpackConfig);

    // Step 2: Attach the dev middleware to the compiler & the server
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath
    }));

    // Step 3: Attach the hot middleware to the compiler & the server
    app.use(webpackHotMiddleware (compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
}

module.exports = {
    bindToApp: bindToApp
};