// routes/lowStocks.js
const express = require('express');
const router = express.Router();
const Component = require('../models/Component'); // Adjust the path as necessary

router.get('/', async (req, res) => {
    try {
        const lowStockComponents = await Component.find({ qty: { $lt: 20 } });
        res.json(lowStockComponents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
