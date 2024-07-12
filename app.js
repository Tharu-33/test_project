// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db'); // Ensure this file sets up your database connection
const componentRoutes = require('./routes/components');
const purchaseRoutes = require('./routes/purchaseRoutes');
const usersRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');
const lowStocksRoutes = require('./routes/lowStocks');
const lendingRoutes = require('./routes/lendingRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/components', componentRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/low-stocks', lowStocksRoutes);
app.use('/api/lending', lendingRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/auth', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
