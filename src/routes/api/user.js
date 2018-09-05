const express = require('express');
const app = new express.Router();
let mongoose = require('mongoose');
// import User from '../../helpers/db/user';
// const UserModel = require('../../models/user');


// app.post('/register', function(req, res) {
//     const user = req.body;
//     let newUser = new UserModel();
//     let password = newUser.generateHash(
//         user.password
//     );
//     newUser.data = {
//         userName: user.userName,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         password: password
//     };
//     newUser.save();
//     res.json({
//         success: true,
//         msg: 'Your Account Created'
//     });
//     console.log(newUser.data);
// });

app.get('/user/read/all', function(req, res) {
    let userdata = mongoose.model('User');
    userdata.find(function(err, response) {
        if (err) return console.error(err);
        res.json(response);
    });
});

module.exports = app;
