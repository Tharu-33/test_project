const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('./config/db'); // Ensure the database connection is established
const Component = require('./models/Component');

dotenv.config();

const defaultComponents = [
    {
        stockID: '12345',
        product: 'Resistor',
        partNo: 'ABC123',
        value: '10K',
        qty: 100,
        footprint: '0805',
        description: '10K Ohm Resistor',
        status: 'Delivered',
    },
    {
        stockID: '67890',
        product: 'Capacitor',
        partNo: 'XYZ789',
        value: '100uF',
        qty: 200,
        footprint: '1206',
        description: '100uF Capacitor',
        status: 'Delivered',
    },
    {
        stockID: '24680',
        product: 'Inductor',
        partNo: 'LMN456',
        value: '1mH',
        qty: 150,
        footprint: '0603',
        description: '1mH Inductor',
        status: 'Delivered',
    },
];

async function seedComponents() {
    try {
        await Component.deleteMany({});
        console.log('Existing components removed.');

        await Component.insertMany(defaultComponents);
        console.log('Default components seeded.');

        mongoose.connection.close();
        console.log('Database connection closed.');
    } catch (err) {
        console.error('Error seeding components:', err);
        mongoose.connection.close();
        console.log('Database connection closed.');
    }
}

seedComponents();
