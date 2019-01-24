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
        type: String,
        default: null
    },
    imageThree: {
        type: String,
        default: null
    },
    imageFour: {
        type: String,
        default: null
    },
    imageFive: {
        type: String,
        default: null
    },
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        default: null
    },
    thirdName: {
        type: String,
        default: null
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