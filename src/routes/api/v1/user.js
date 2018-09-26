const express = require('express');
const app = new express.Router();
let mongoose = require('mongoose');

app.get('/user/read/all', function(req, res) {
    let userdata = mongoose.model('User');
    userdata.find(function(err, response) {
        if (err) return console.error(err);
        res.json(response);
    });
});

module.exports = app;
