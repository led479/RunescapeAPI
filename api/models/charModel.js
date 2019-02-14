'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CharSchema = new Schema({
    login: {
        type: String,
        required: 'Digite o login'
    },
    level: {
        type: Object,
        att: {
            type: Number,
            default: 1
        },
        str: {
            type: Number,
            default: 1
        },
        def: {
            type: Number,
            default: 1
        },
        wc: {
            type: Number,
            default: 1
        },
        rc: {
            type: Number,
            default: 1
        }
    }
});

module.exports = mongoose.model('Chars', CharSchema);