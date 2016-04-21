var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studySchema = new Schema({
    name: String,
    description: String,
    academy: String,
    yearInit: Number,
    yearEnd: Number,
    urlLogo: String,
    active: Boolean
});

module.exports = mongoose.model('Study', studySchema);