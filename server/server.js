var express = require('express');
var app = express();

var serveIndex = require('serve-index');
var serveStatic = require('serve-static');

var PORT = process.env.PORT || 3000;

exports.start = function(){

    app.use ('/', serveStatic('public'));
    app.use ('/', serveIndex('public'));

    app.listen(PORT, function(){

        console.log('server running on port '+PORT);

    });


};

exports.stop = function(){



};