const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    style: {
        type: String,
        required: true,
        trim: true
    },
    image1: {
        type: String,
        required: true,
        trim: true
    },
    image2: {
        type: String,
        required: true,
        trim: true
    },
    image3: {
        type: String,
        required: true,
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