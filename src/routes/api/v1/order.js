const express = require('express');
const app = new express.Router();
const mongoose = require('mongoose');
const orderModel = require('../../../models/order');

// add shipping
app.post('/order/create', function(req, res) {
    let data = {
        userID: req.user._id,
        name: req.body.name,
        phone: req.body.phone,
        address: {
            street: req.body.address.street,
            postcode: req.body.address.postcode,
            town: req.body.address.town,
            state: req.body.address.state,
        },
        money: {
            subtotal: req.body.subtotal,
            deliveryFee: req.body.totaldeliveryfee,
            total: req.body.totalOrder
        },
    };
    let orderObj = new orderModel(data);
    orderObj.save();
    res.json({
        success: true,
        msg: 'Your Order Is Place Success',
        data: data
    });
});

// read one
app.post('/order/read', function(req, res) {
    let orderData = mongoose.model('Order');
    orderData
        .find({'meta.is_delete': false, 'userID': req.user._id},
            function(err, response) {
                if (err) return console.error(err);
            })
        .populate({
            path: 'cartItem.food',
            select: {
                'name': 1,
                'price': 1
            }
        })
        .exec(function(err, obj) {
            console.log(obj);
            res.json(obj);
        });
});


// read order all
app.get('/order/read/all', function(req, res) {
    let orderdata = mongoose.model('Order');
    orderdata.find({'meta.is_delete': false},
        function(err, response) {
            if (err) return console.error(err);
            res.json(response);
        });
});

// order shipping
app.post('/order/delete', function(req, res) {
    let orderdata = mongoose.model('Order');
    orderdata.findOne({_id: req.body.orderid})
        .exec(function(err, obj) {
            console.log(obj);
            obj.meta.is_delete = true;
            obj.save();
        });
    res.json({
        success: true,
        msg: 'Order is Delete'
    });
});

module.exports = app;