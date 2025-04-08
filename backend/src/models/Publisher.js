const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String },
    contact: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Publisher', publisherSchema);