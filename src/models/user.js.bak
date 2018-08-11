// load the things we need
const mongoose = require('mongoose');
// const ObjectId = require('mongoose').Schema.Types.ObjectId;

// load the things we need
const bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
let userSchema = new mongoose.Schema({
    data: {
        userName: String,
        firstName: String,
        lastName: String,
        email: String,
        password: String
    },
    isAdmin: {type: Boolean, default: false},
    meta: {
        isDelete: {type: Boolean, default: false}
    }
}, {timestamps: true});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
