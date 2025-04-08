const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    discount: { type: Number, required: true }, // Phần trăm hoặc số tiền giảm
    discountType: { type: String, enum: ['percentage', 'fixed'], default: 'percentage' },
    expiryDate: { type: Date, required: true },
    minOrderAmount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Coupon', couponSchema);