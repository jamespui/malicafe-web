const express = require('express');
const app = new express.Router();
const mongoose = require('mongoose');
let foodModel = require('../../../models/food');


app.post('/food/create', function(req, res) {
    let foodData = req.body;
    let food = new foodModel(
        {
            name: foodData.name,
            description: foodData.description,
            image_file: foodData.image_file,
            price: foodData.price
        }
    );
    food.save();
    res.json({
        success: true,
        msg: 'Food Created',
        data: food
    });
});

app.get('/food/read/all', function(req, res) {
    let fooddata = mongoose.model('Food');
    fooddata.find(function(err, response) {
        if (err) return console.error(err);
        res.json(response);
    });
});

module.exports = app;
