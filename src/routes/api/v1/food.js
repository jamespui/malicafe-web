const express = require('express');
const app = new express.Router();
const mongoose = require('mongoose');
const foodModel = require('../../../models/food');

// create food
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

// read food all
app.get('/food/read/all', function(req, res) {
    let fooddata = mongoose.model('Food');
    fooddata.find({'meta.is_delete': false},
        function(err, response) {
            if (err) return console.error(err);
            res.json(response);
        });
});

// delete food
app.post('/food/delete', function(req, res) {
    let fooddata = mongoose.model('Food');
    fooddata.findOne({_id: req.body.foodid})
        .exec(function(err, obj) {
            console.log(obj);
            obj.meta.is_delete = true;
            obj.save();
        });
    res.json({
        success: true,
        msg: 'Food is Delete'
    });
});


module.exports = app;
