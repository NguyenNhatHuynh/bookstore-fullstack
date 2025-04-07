const app = require('./src/index');
const { port } = require('./src/config/env');
const connectDB = require('./src/config/db');

const startServer = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

startServer();