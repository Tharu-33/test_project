const Component = require('../models/Component');

exports.getLowStockComponents = async (req, res) => {
    try {
        const searchQuery = req.query.search || '';
        const lowStockThreshold = 100; // Define the threshold for low stock

        const query = {
            qty: { $lt: lowStockThreshold },
            partNo: { $regex: searchQuery, $options: 'i' },
        };

        const components = await Component.find(query);
        res.json({ components });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
