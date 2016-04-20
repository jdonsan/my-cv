module.exports = function (resource) {
    var controller = require('./controller')(resource);
    var express = require('express');
    var router = express.Router();
    
    router.route(`/${resource}`).get(controller.getAll);
    
    return router;
};

