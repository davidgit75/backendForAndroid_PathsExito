var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaPath = new Schema({
    lat: Number,
    lon: Number,
    name: String,
    direction: String
});

module.exports = mongoose.model('path', schemaPath, 'path');