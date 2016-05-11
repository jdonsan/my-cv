var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    name: String,
    description: String,
    logo: String,
    url: String,
    active: Boolean
});

module.exports = mongoose.model('Contact', contactSchema);
