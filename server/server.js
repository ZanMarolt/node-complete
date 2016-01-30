var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

exports.start = function(){

    app.get('/', function(req, res){

        res.send('Hello World!');

    });

    app.listen(PORT, function(){

        console.log('server running on port '+PORT);

    });


};

exports.stop = function(){



};