const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    style: {
        type: String,
        required: true
    },
    imageOne: {
        type: String,
        required: true
    },
    imageTwo: {
        type: String
    },
    imageThree: {
        type: String
    },
    imageFour: {
        type: String
    },
    imageFive: {
        type: String
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    details: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sold: {
        type: Boolean,
        default: false
    }
});

const Product = mongoose.model('products', ProductSchema);

module.exports = {Product};