const router = require("express").Router();
//Sequelize Routes
const customerRoutes = require('./customer');
const stockRoutes = require('./stockRoutes')

// Book routes
router.use('/customers', customerRoutes);
router.use('/stock', stockRoutes);
module.exports = router;
