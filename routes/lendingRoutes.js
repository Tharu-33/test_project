// routes/lendingRoutes.js
const express = require('express');
const router = express.Router();
const Lending = require('../models/Lending');

// Get all lending components
router.get('/', async (req, res) => {
    try {
        const lendingComponents = await Lending.find();
        res.json(lendingComponents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific lending component
router.get('/:id', async (req, res) => {
    try {
        const lendingComponent = await Lending.findById(req.params.id);
        if (!lendingComponent) return res.status(404).json({ message: 'Lending component not found' });
        res.json(lendingComponent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new lending component
router.post('/', async (req, res) => {
    const lendingComponent = new Lending({
        stockID: req.body.stockID,
        borrowerID: req.body.borrowerID,
        borrowedDate: req.body.borrowedDate,
        dueDate: req.body.dueDate,
        notes: req.body.notes,
        status: req.body.status,
    });
    try {
        const newLendingComponent = await lendingComponent.save();
        res.status(201).json(newLendingComponent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a lending component
router.put('/:id', async (req, res) => {
    try {
        const updatedLendingComponent = await Lending.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLendingComponent) return res.status(404).json({ message: 'Lending component not found' });
        res.json(updatedLendingComponent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a lending component
router.delete('/:id', async (req, res) => {
    try {
        const lendingComponent = await Lending.findByIdAndDelete(req.params.id);
        if (!lendingComponent) return res.status(404).json({ message: 'Lending component not found' });
        res.json({ message: 'Lending component deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
