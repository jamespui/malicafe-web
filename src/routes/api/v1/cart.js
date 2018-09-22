const express = require('express');
const app = new express.Router();
const mongoose = require('mongoose');
const cartModel = require('../../../models/cart');

// add to cart
app.post('/cart/add', function(req, res) {
    res.json({
        success: true,
        msg: 'Add Success',
        data: 'Hello'
    });
});