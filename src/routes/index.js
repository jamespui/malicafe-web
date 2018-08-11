const express = require('express');
const app = new express.Router();
const apiURL = require('./api');


// API CALL LINK
app.use('/api', apiURL);

// Serve link example (http://localhost:3018/__)
app.get('/', function(req, res) {
    res.render('home', {title: 'Malicafe'});
});

app.get('/resetpassword', function(req, res) {
    res.render('account/resetpassword', {title: 'Reset Password'});
});

app.get('/forgotpassword', function(req, res) {
    res.render('account/forgotpassword', {title: 'Forgot Password'});
});

app.get('/shoppingcart', function(req, res) {
    res.render('common/shoppingcart', {title: 'Shopping Cart'});
});

module.exports = app;
