var express = require('express');
var path = require('path');
var webpack_starter = require('./install');
var app = express();
var PORT = 3001;

var publicDir = path.resolve(__dirname, 'public');
var mainPath = path.resolve(__dirname, 'app', 'index.js');
webpack_starter.bindToApp(app, publicDir, mainPath);

// Serve static files from the public folder (very primitive routing)
var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.listen(PORT, function () {
    console_out = 'Example app listening on port ' + PORT.toString();
    console.log(console_out);
});