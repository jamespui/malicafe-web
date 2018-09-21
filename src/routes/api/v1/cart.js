const express = require('express');
const app = new express.Router();
const mongoose = require('mongoose');
const cartModel = require('../../../models/cart');

// add to cart
app.post('/cart/add', function(req, res) {

    let cartObj = req.body;
    cartObj.userID = id;
    let cartObj = new cartModel(data);
    // cb(err, data);
    cartObj.save(function(err, obj) {
        cb(err, obj);
    });

    res.json({
        success: true,
        msg: 'Add Success',
        data: addtocart
    });
});

static create(data, cb) {
    let cartObj = new db.Cart(data);
    // cb(err, data);
    cartObj.save(function(err, obj) {
        cb(err, obj);
    });
}