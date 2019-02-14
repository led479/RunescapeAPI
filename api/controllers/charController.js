'use strict';


var mongoose = require('mongoose'),
    Char = mongoose.model('Chars');

exports.list_all_chars = function(req, res) {
    Char.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};




exports.create_a_char = function(req, res) {
    var new_char = new Char(req.body);
    new_char.save(function(err, char) {
        if (err)
            res.send(err);
        res.json(char);
    });
};


exports.read_a_char = function(req, res) {
    Char.findById(req.params.charId, function(err, char) {
        if (err)
            res.send(err);
        res.json(char);
    });
};


exports.update_a_char = function(req, res) {
    Char.findOneAndUpdate({_id: req.params.charId}, req.body, {new: true}, function(err, char) {
        if (err)
            res.send(err);
        res.json(char);
    });
};


exports.delete_a_char = function(req, res) {
    Char.remove({_id: req.params.charId}, function(err, char) {
        if (err)
            res.send(err);
        res.json({ message: 'Char successfully deleted' });
    });
};

exports.char_total_lvl = function(req, res) {
    Char.findById(req.params.charId, function(err, char) {
        if (err)
            res.send(err);
        res.json(char.att_lvl + char.str_lvl + char.def_lvl + char.wc_lvl + char.rc_lvl);
    });
};