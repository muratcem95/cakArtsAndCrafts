const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    style: {
        type: String,
        required: true,
        trim: true
    },
    imageOne: {
        type: String,
        default: null,
        trim: true
    },
    imageTwo: {
        type: String,
        default: null,
        trim: true
    },
    imageThree: {
        type: String,
        default: null,
        trim: true
    },
    imageFour: {
        type: String,
        default: null,
        trim: true
    },
    imageFive: {
        type: String,
        default: null,
        trim: true
    },
    imageSix: {
        type: String,
        default: null,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    details: {
        type: String,
        required: true,
        trim: true
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

const Product = mongoose.model('products', productSchema);

module.exports = {Product};