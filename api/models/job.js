var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
    name: String,
    description: String,
    enterprise: String,
    urlLogo: String,
    yearInit: Number,
    yearEnd: Number,
    active: Boolean
});

module.exports = mongoose.model('Job', jobSchema);