const express = require('express');
const app = new express.Router();

// Serve link example (http://localhost:3018/__)
app.get('/', function(req, res) {
    res.render('home', {title: 'Malicafe'});
});

app.get('/login', function(req, res) {
    res.render('account/login', {title: 'Login'});
});

app.get('/register', function(req, res) {
    res.render('account/register', {title: 'Register'});
});

module.exports = app;
