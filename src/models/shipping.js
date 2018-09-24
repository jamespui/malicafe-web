const mongoose = require('mongoose');
// const ObjectId = require('mongoose').Schema.Types.ObjectId;
const {Schema} = mongoose;

const FeeSchema = new Schema({
    postcode: String,
    shippingfee: Number,
    meta: {
        is_delete: {type: Boolean, default: false},
        is_hidden: {type: Boolean, default: false}
    }
}, {timestamps: true});

module.exports = mongoose.model('Fee', FeeSchema);
