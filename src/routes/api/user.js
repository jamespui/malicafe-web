const express = require('express');
const app = new express.Router();
// import User from '../../helpers/db/user';
const UserModel = require('../../models/user');


app.post('/register', function(req, res) {
    const user = req.body;
    let newUser = new UserModel();
    let password = newUser.generateHash(
        user.password
    );
    newUser.data = {
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: password
    };
    newUser.save();
    res.json({
        success: true,
        msg: 'Your Account Created'
    });
    console.log(newUser.data);
});

app.get('/read', function(req, res) {
    let data = {
        name: 'hello'
    };
    res.json(data);
});

module.exports = app;
