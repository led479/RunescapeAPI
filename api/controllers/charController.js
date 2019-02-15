'use strict';


var mongoose = require('mongoose'),
    request = require('request'),
    Char = mongoose.model('Chars');

var adiciona_login = function(json, login) {
    json['login'] = login;
    return json;
};


exports.list_all_chars = function(req, res) {
    Char.find({}, function(err, chars) {
        if (err) res.send(err);
        res.json(chars);
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
        res.json(char);
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


exports.import_char = function(req, res) {
    let url = 'https://oldschool.tools/ajax/hiscore-stats/' + req.params.login;
    request(url, function (error, response) {
        let res_body = JSON.parse(response.body);
        if (res_body['status'] === 'failure')
            res.status(422).send({ 'error': res_body['message'] });
        else if (res_body['status'] === 'success') {
            var new_char = new Char(adiciona_login(res_body, req.params.login));
            new_char.save(function(err, char) {
                if (err) res.send(err);
                res.json(char);
            });
        } else {
            res.send('bugou algo');
        }
    })
};