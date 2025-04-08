const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    try {
        const { userId, items, totalAmount } = req.body;
        const order = new Order({
            userId,
            items,
            totalAmount,
        });
        await order.save();
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
};