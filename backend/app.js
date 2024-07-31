const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

app.use(express.json());
app.use(cors());

// Import the routes
const transactionsRoutes = require('./routes/transactions');

// Use the routes
app.use('/api/v1', transactionsRoutes);

app.get('/', (req, res) => {
    res.send('Hello world');
});

const server = () => {
    try {
        app.listen(PORT, () => {
            console.log('Listening to port:', PORT);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

server();
