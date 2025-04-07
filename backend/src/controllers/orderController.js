const Order = require('../models/Order');
const Book = require('../models/Book');

exports.createOrder = async (req, res) => {
    const { items } = req.body; // items: [{ bookId, quantity }]
    try {
        let total = 0;
        const orderItems = [];

        for (const item of items) {
            const book = await Book.findById(item.bookId);
            if (!book) return res.status(404).json({ message: `Book ${item.bookId} not found` });
            if (book.stock < item.quantity) return res.status(400).json({ message: `Insufficient stock for ${book.title}` });

            const price = book.price * item.quantity;
            total += price;
            orderItems.push({ book: book._id, quantity: item.quantity, price });

            book.stock -= item.quantity;
            await book.save();
        }

        const order = new Order({
            user: req.user.id,
            items: orderItems,
            total,
        });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('items.book');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};