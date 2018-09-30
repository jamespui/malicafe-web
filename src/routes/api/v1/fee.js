const express = require('express');
const app = new express.Router();
const mongoose = require('mongoose');
const feeModel = require('../../../models/shipping');

// add shipping
app.post('/shipping/add', function(req, res) {
    let data = {
        postcode: req.body.postcode,
        deliveryfee: req.body.fee
    };
    let feeObj = new feeModel(data);
    feeObj.save();
    res.json({
        success: true,
        msg: 'Delivery Fee Add Success',
        data: data
    });
});

// read shipping all
app.get('/shipping/read/all', function(req, res) {
    let shippingdata = mongoose.model('Fee');
    shippingdata.find({'meta.is_delete': false},
        function(err, response) {
            if (err) return console.error(err);
            res.json(response);
        });
});

app.post('/shipping/read/one', function(req, res) {
    let shippingdata = mongoose.model('Fee');
    shippingdata
        .find({'postcode': req.body.postcode},
            function(err, response) {
                if (err) return console.error(err);
                res.json(response);
            });
});

// delete shipping
app.post('/shipping/delete', function(req, res) {
    let shippingdata = mongoose.model('Fee');
    shippingdata.findOne({_id: req.body.shippingid})
        .exec(function(err, obj) {
            // obj.meta.is_delete = true;
            obj.remove();
        });
    res.json({
        success: true,
        msg: 'Delivery Fee is Delete'
    });
});

module.exports = app;