var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skillSchema = new Schema({
    name: String,
    description: String,
    category: String,
    type: {
        type: String,
        enum: ['FRONT', 'BACK', 'BOTH', 'OTHERS']
    },
    level: Number,
    yearsExperience: Number,
    active: Boolean
});

module.exports = mongoose.model('Skill', skillSchema);