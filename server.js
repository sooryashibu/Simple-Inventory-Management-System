const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const itemRoutes = require('./routes/itemRoutes');
const logger = require('./middleware/logger');

dotenv.config();
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.get('/', (req, res) => {
    res.send("Inventory API is Running");
});

app.get('/health', (req, res) => {
    res.json({ status: 'Server is healthy', uptime: process.uptime() });
});

// Item routes
app.use('/items', itemRoutes);

// 404 Middleware
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error(err));
