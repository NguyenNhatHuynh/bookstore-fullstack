const express = require('express');
const router = express.Router();
const blogController = require('../../controllers/blogController');

// Lấy danh sách tất cả bài blog
router.get('/', blogController.getAllBlogs);

// Lấy chi tiết một bài blog theo ID
router.get('/:id', blogController.getBlogById);

module.exports = router;