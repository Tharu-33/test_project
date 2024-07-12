// routes/components.js
const express = require('express');
const router = express.Router();
const componentController = require('../controllers/componentController');

// Get all components
router.get('/', componentController.getComponents);

// Add a new component
router.post('/add', componentController.addComponent);

// Update a component
router.put('/update/:id', componentController.updateComponent);

// Delete a component
router.delete('/delete/:id', componentController.deleteComponent);

module.exports = router;
