const express = require('express');
const router = express.Router();
const cartController = require('../../controllers/cartController');

// Thêm sản phẩm vào giỏ hàng
router.post('/', cartController.addToCart);

// Lấy giỏ hàng của user
router.get('/user/:userId', cartController.getCart);

module.exports = router;