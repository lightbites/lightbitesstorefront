const router = require("express").Router();
//Sequelize Routes
const customerRoutes = require('./customer');

// Book routes
router.use('/customers', customerRoutes)
module.exports = router;
