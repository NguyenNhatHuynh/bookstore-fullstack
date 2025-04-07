const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    publisher: { type: mongoose.Schema.Types.ObjectId, ref: 'Publisher' },
    stock: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', bookSchema);