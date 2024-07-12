// models/Lending.js
const mongoose = require('mongoose');

const lendingSchema = new mongoose.Schema({
    stockID: String,
    borrowerID: String,
    borrowedDate: Date,
    dueDate: Date,
    notes: String,
    status: String,
});

const Lending = mongoose.model('Lending', lendingSchema);

module.exports = Lending;
