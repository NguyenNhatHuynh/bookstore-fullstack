const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Import public routes
const bookRoutes = require('./routes/public/bookRoutes');
const authRoutes = require('./routes/public/authRoutes');
const reviewRoutes = require('./routes/public/reviewRoutes');
const blogRoutes = require('./routes/public/blogRoutes');

// Import private routes
const cartRoutes = require('./routes/private/cartRoutes');
const orderRoutes = require('./routes/private/orderRoutes');

// Import admin routes
const adminBookRoutes = require('./routes/admin/bookRoutes');

// Import middleware
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối DB
connectDB();

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin/books', adminBookRoutes);

// Error handling
app.use(errorHandler);

module.exports = app;