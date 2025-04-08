const express = require('express');
const router = express.Router();
const bookController = require('../../controllers/bookController');

// Admin: Thêm sách mới
router.post('/', bookController.addBook);

// Admin: Cập nhật sách
router.put('/:id', bookController.updateBook);

// Admin: Xóa sách
router.delete('/:id', bookController.deleteBook);

module.exports = router;