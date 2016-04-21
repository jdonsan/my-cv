var resources = require('./constants').resources;
var seeder = require('mongoose-seed');

var api = {
    init: init
};

function init(url, functionCb) {
    seeder.connect(url, function () {
        seeder.loadModels(_getLoadModels());
        seeder.clearModels(_getModels(), function () {
            seeder.populateModels(_getDataModels());
            functionCb();
        });
    });
}

function _getModels() {
    return resources.map(resource => resource.charAt(0).toUpperCase() + resource.slice(1));
}

function _getLoadModels() {
    return resources.map(resource => `api/models/${resource}.js`);
}

function _getDataModels() {
    return resources.map(resource => require(`../data/${resource}.js`));
}

module.exports = api;