const express = require('express');
const app = new express.Router();
const apiURL = require('./api');


// API CALL LINK
app.use('/api', apiURL);

// Serve link example (http://localhost:3018/__)


app.get('/resetpassword', function(req, res) {
    res.render('account/resetpassword', {title: 'Reset Password'});
});

app.get('/forgotpassword', function(req, res) {
    res.render('account/forgotpassword', {title: 'Forgot Password'});
});

app.get('/editaddress', function(req, res) {
    res.render('account/editaddress', {title: 'My Account'});
});

app.get('/address', function(req, res) {
    res.render('account/address', {title: 'Address'});
});

app.get('/thankyou', function(req, res) {
    res.render('shop/thankyou', {title: 'Address'});
});

module.exports = app;
