const express = require('express');
const router = express.Router();
const orderController = require('../../controllers/orderController');

// Tạo đơn hàng mới
router.post('/', orderController.createOrder);

// Lấy danh sách đơn hàng của user
router.get('/user/:userId', orderController.getUserOrders);

module.exports = router;