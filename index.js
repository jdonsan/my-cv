var logger = require('log4js').getLogger('index');
var config = require('./config/constants');
var express = require('express');
var app = express();
var seed = require('./config/seed');

app.use(express.static('statics'));

config.resources.forEach(function (resource) {
    app.use('/api', require('./api/route')(resource));
});

seed.init(config.mongodb.url, function () {
    logger.info('Connexión con mongodb realizada');
    app.listen(config.express.port, function () {
        logger.info(`Servidor escuchando en el puerto ${config.express.port}`);
    });
});
