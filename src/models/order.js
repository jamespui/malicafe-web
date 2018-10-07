const mongoose = require('mongoose');
const ObjectId = require('mongoose').Schema.Types.ObjectId;
const {Schema} = mongoose;

const orderSchema = new Schema({
    userID: {type: ObjectId, ref: 'User'},
    name: String,
    phone: String,
    address: {
        street: String,
        postcode: String,
        town: String,
        state: String,
    },
    cartData: JSON,
    money: {
        subtotal: Number,
        deliveryFee: Number,
        total: Number
    },
    meta: {
        is_complete: {type: Boolean, default: false},
        is_delete: {type: Boolean, default: false},
        is_hidden: {type: Boolean, default: false}
    }
}, {timestamps: true});

module.exports = mongoose.model('Order', orderSchema);