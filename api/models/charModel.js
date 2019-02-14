'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CharSchema = new Schema({
    login: {
        type: String,
        required: 'Digite o login'
    },
    att_lvl: {
        type: Number,
        default: 1
    },
    str_lvl: {
        type: Number,
        default: 1
    },
    def_lvl: {
        type: Number,
        default: 1
    },
});

module.exports = mongoose.model('Chars', CharSchema);