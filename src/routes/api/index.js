const express = require('express');
const app = new express.Router();

const userURL = require('./user');

app.use(userURL);

module.exports = app;
