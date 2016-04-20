module.exports = function (resource) {
    var Model = require(`./models/${resource}`);
 
    return {
        getAll: function () {
            return Model.find();
        }
    };
}