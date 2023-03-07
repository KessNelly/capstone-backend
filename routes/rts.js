const express = require('express');
const { register, login } = require('../controllers/customerControls.js');
const { verifyAuth } = require('../middleware/auth.js');
const routeManager = express.Router()


routeManager.post('/registerCustomer', register)
routeManager.post('/Auth', login)
//routeManager.post('/dashboard', verifyAuth, dashboard)


module.exports = { routeManager }