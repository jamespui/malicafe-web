const express = require('express');
const app = new express.Router();

app.use(require('./v1/user'));
app.use(require('./v1/food'));
app.use(require('./v1/cart'));
app.use(require('./v1/fee'));
app.use(require('./v1/order'));
app.use(require('./v1/feedback'));

module.exports = app;
