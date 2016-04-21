var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    name: String,
    description: String,
    client: String,
    urlLogo: String,
    years: Number,
    active: Boolean
});

module.exports = mongoose.model('Project', projectSchema);