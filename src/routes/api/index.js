const express = require('express');
const app = new express.Router();

app.use(require('./v1/user'));
app.use(require('./v1/food'));

module.exports = app;
