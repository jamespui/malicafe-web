const mongoose = require('mongoose');
const {Schema} = mongoose;
// const ObjectId = mongoose.Schema.Types.ObjectId;
const FoodSchema = new Schema({
    name: String,
    description: String,
    image_file: String,
    price: String,
    meta: {
        is_available: {type: Boolean, default: true}, // if false, it means out of stock
        is_delete: {type: Boolean, default: false}, // if false, means already deleted
        is_active: {type: Boolean, default: true} // if false, means not showing in menu
    }
}, {timestamps: true});

FoodSchema.index({name: 'text', description: 'text'});

module.exports = mongoose.model('Food', FoodSchema);
