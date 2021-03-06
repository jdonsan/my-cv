var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileSchema = new Schema({
    name: String,
    surname: String,
    description: String,
    rol: String,
    experience: Number,
    urlPhoto: String
});

module.exports = mongoose.model('Profile', profileSchema);