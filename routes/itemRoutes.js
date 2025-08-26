const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// POST /items → Add new item
router.post('/', async (req, res) => {
    try {
        const { name, quantity, price } = req.body;
        const item = new Item({ name, quantity, price });
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /items → List all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
