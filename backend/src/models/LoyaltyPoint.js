const mongoose = require('mongoose');

const loyaltyPointSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    points: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('LoyaltyPoint', loyaltyPointSchema);