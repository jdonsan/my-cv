var mongoose = require('mongoose');
var logger = require('log4js').getLogger('index');
var config = require('./config/constants');
var express = require('express');
var app = express();

app.use(express.static('statics'));

config.resources.forEach(function (resource) {
    app.use('/api', require('./api/route')(resource));
});

mongoose.connect(config.mongodb.url, function () {
    logger.info('Connexión con mongodb realizada');
    
    app.listen(process.env.PORT || config.express.port, function () {
        logger.info(`Servidor escuchando en el puerto ${config.express.port}`);
    });
});