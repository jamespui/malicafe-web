const mongoose = require('mongoose');
const ObjectId = require('mongoose').Schema.Types.ObjectId;
const {Schema} = mongoose;

const CartSchema = new Schema({
    userID: {type: ObjectId, ref: 'User'},
    cartItem: {
        food: {type: ObjectId, ref: 'Food'},
        quantity: Number
    },
    address: String,
    meta: {
        is_delete: {type: Boolean, default: false},
        is_hidden: {type: Boolean, default: false}
    }
}, {timestamps: true});

module.exports = mongoose.model('Cart', CartSchema);
