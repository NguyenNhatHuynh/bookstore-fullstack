const express = require('express');
const cors = require('cors');
const connectDB = require('../config/db');
const bookRoutes = require('./routes/public/bookRoutes');
const authRoutes = require('./routes/public/authRoutes');
const cartRoutes = require('./routes/private/cartRoutes');
const adminBookRoutes = require('./routes/admin/bookRoutes');
const errorHandler = require('./middleware/errorHandler');
const orderRoutes = require('./routes/private/orderRoutes');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/admin/books', adminBookRoutes);
app.use('/api/orders', orderRoutes);

// Error handling
app.use(errorHandler);

module.exports = app;