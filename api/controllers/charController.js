'use strict';


var mongoose = require('mongoose'),
    Char = mongoose.model('Chars');


exports.list_all_chars = function(req, res) {
    Char.find({}, function(err, chars) {
        if (err) res.send(err);
        res.json(chars.map((char) => {
            return Object.assign(char.toJSON(), { 'total_lvl': char.totalLvl() });
        }));
    });
};


exports.create_a_char = function(req, res) {
    var new_char = new Char(req.body);
    new_char.save(function(err, char) {
        if (err) res.send(err);
        res.json(char);
    });
};


exports.read_a_char = function(req, res) {
    Char.findOne({ 'login': req.params.login }, function(err, char) {
        if (err) res.send(err);
        res.json(Object.assign(char.toJSON(), { 'total_lvl': char.totalLvl() }));
    });
};


exports.update_a_char = function(req, res) {
    Char.findOneAndUpdate({ 'login': req.params.login }, req.body, {new: true}, function(err, char) {
        if (err) res.send(err);
        res.json(char);
    });
};


exports.delete_a_char = function(req, res) {
    Char.remove({ 'login': req.params.login }, function(err, char) {
        if (err) res.send(err);
        res.json({ message: 'Char successfully deleted' });
    });
};


exports.char_total_lvl = function(req, res) {
    Char.findOne({ 'login': req.params.login }, function(err, char) {
        if (err) res.send(err);
        res.json({ "total_lvl": char.totalLvl() });
    });
};

