const express = require('express');
const app = new express.Router();
const mongoose = require('mongoose');
const cartModel = require('../../../models/cart');

// add to cart
app.post('/cart/add', function(req, res) {
    let data = {
        userID: req.user._id,
        cartItem: {
            food: req.body.foodid,
            quantity: req.body.quantity
        }
    };
    let cartObj = new cartModel(data);
    cartObj.save();
    res.json({
        success: true,
        msg: 'Add Success',
        data: data
    });
});

// for user
app.post('/cart/read', function(req, res) {
    let cartData = mongoose.model('Cart');
    cartData
        .find({'meta.is_delete': false, 'userID': req.user._id},
            function(err, response) {
                if (err) return console.error(err);
            })
        .populate({
            path: 'cartItem.food',
            select: {
                '_id': 1,
                'name': 1,
                'price': 1,
                'image_file': 1
            }
        })
        .exec(function(err, obj) {
            console.log(obj);
            res.json(obj);
        });
});

// delete food
app.post('/cart/delete', function(req, res) {
    let cartData = mongoose.model('Cart');
    cartData.findOne({_id: req.body.cartid})
        .exec(function(err, obj) {
            console.log(obj);
            obj.meta.is_delete = true;
            obj.save();
        });
    res.json({
        success: true,
        msg: 'Cart Remove'
    });
});

module.exports = app;
