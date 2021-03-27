'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var fruta_schema = schema({
    name: String,
    color: String,
    season: Boolean
});

module.exports = mongoose.model('Fruit', fruta_schema);