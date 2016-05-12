var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
    name: String,
    description: String,
    type: {
        type: String,
        enum: ['FRONT', 'BACK', 'BOTH', 'OTHERS'],
        default: 'OTHERS'
    },
    academy: String,
    year: Number,
    urlLogo: String,
    active: Boolean
});

module.exports = mongoose.model('Course', courseSchema);
