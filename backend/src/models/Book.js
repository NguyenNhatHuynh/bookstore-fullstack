const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    publisher: { type: mongoose.Schema.Types.ObjectId, ref: 'Publisher' },
    price: { type: Number, required: true },
    description: { type: String },
    isbn: { type: String, unique: true },
    publishedDate: { type: Date },
    inventory: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', bookSchema);