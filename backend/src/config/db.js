const mongoose = require('mongoose');
const { MONGO_URI } = require('./env');

const connectDB = async () => {
    if (!MONGO_URI) {
        console.error('MONGO_URI is not defined in environment variables');
        process.exit(1);
    }
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;