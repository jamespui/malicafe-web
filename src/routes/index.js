const express = require('express');
const app = new express.Router();
const mongoose = require('mongoose');
const apiURL = require('./api');

mongoose.connect('mongodb://root:password@localhost:27017/malicafeDB?authSource=admin', {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('Malicafe Database is Connected');
});

// API CALL LINK
app.use('/api', apiURL);


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
