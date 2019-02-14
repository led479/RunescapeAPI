'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);


var CharSchema = new Schema({
    login: {
        type: String,
        unique: true,
        required: 'Digite o login'
    },
    level: {
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
        rgd: {
            type: Number,
            default: 1
        },
        pry: {
            type: Number,
            default: 1
        },
        mgc: {
            type: Number,
            default: 1
        },
        rc: {
            type: Number,
            default: 1
        },
        hp: {
            type: Number,
            default: 1
        },
        crf: {
            type: Number,
            default: 1
        },
        mng: {
            type: Number,
            default: 1
        },
        fsh: {
            type: Number,
            default: 1
        },
        ckg: {
            type: Number,
            default: 1
        },
        wc: {
            type: Number,
            default: 1
        },
        fm: {
            type: Number,
            default: 1
        },
        ag: {
            type: Number,
            default: 1
        },
        hrb: {
            type: Number,
            default: 1
        },
        thf: {
            type: Number,
            default: 1
        },
        flc: {
            type: Number,
            default: 1
        },
        slr: {
            type: Number,
            default: 1
        },
        fmg: {
            type: Number,
            default: 1
        },
        crs: {
            type: Number,
            default: 1
        },
        hun: {
            type: Number,
            default: 1
        }
    }
});
CharSchema.methods.totalLvl = function () {
    return sumValues(this.level)
};

module.exports = mongoose.model('Chars', CharSchema);