const mongoose = require('mongoose');
const {Schema} = mongoose;
// const ObjectId = mongoose.Schema.Types.ObjectId;
const feedbackScheme = new Schema({
    name: String,
    email: String,
    message: String,
}, {timestamps: true});

module.exports = mongoose.model('Feedback', feedbackScheme);