const express = require('express');
const router = express.Router();
const reviewController = require('../../controllers/reviewController');

// Lấy tất cả đánh giá của một cuốn sách
router.get('/book/:bookId', reviewController.getReviewsByBook);

// Thêm đánh giá mới (công khai, không cần auth)
router.post('/book/:bookId', reviewController.addReview);

module.exports = router;