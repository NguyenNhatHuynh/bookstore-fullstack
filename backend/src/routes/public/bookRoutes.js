const express = require('express');
const router = express.Router();
const bookController = require('../../controllers/bookController');

// Lấy danh sách tất cả sách
router.get('/', bookController.getAllBooks);

// Lấy thông tin chi tiết một cuốn sách theo ID
router.get('/:id', bookController.getBookById);

module.exports = router;