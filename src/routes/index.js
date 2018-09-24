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

/* app.get('/myaccount', function(req, res) {
    res.render('account/myaccount', {title: 'My Account'});
});*/

app.get('/editaddress', function(req, res) {
    res.render('account/editaddress', {title: 'My Account'});
});

app.get('/address', function(req, res) {
    res.render('account/address', {title: 'Address'});
});


app.get('/checkout', function(req, res) {
    res.render('shop/checkout', {title: 'CheckOut'});
});

/* app.get('/mycart', function(req, res) {
    res.render('shop/mycart', {title: 'MyCart'});
});*/


// Admin Area
// =============================
app.get('/admin/dashboard', function(req, res) {
    res.render('admin/admin_dashboard', {title: 'Admin Dashboard'});
});

app.get('/admin/food/menu', function(req, res) {
    res.render('admin/admin_foodmenu', {title: 'Food Menu'});
});


app.get('/admin/settings', function(req, res) {
    res.render('admin/admin_settings', {title: 'Admin Settings'});
});

module.exports = app;
