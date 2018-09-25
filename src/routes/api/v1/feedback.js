const express = require('express');
const app = new express.Router();
const mongoose = require('mongoose');
const feedbackModel = require('../../../models/feedback');

// add shipping
app.post('/feedback/add', function(req, res) {
    let data = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.msg
    };
    let feedbackObj = new feedbackModel(data);
    feedbackObj.save();
    res.json({
        success: true,
        msg: 'Thank you to your feedback',
        data: data
    });
});

// read shipping all
app.get('/feedback/read/all', function(req, res) {
    let feedbackdata = mongoose.model('Feedback');
    feedbackdata.find(
        function(err, response) {
            if (err) return console.error(err);
            res.json(response);
        });
});

module.exports = app;