const express = require('express')
const router = express.Router()
const authMiddleWare=require('../middlewares/auth.middleware.js')
const foodControllers = require('../controllers/food.controller.js')

/* POST /api/food/ [protected] */
router.post('/', authMiddleWare.authFoodPartnerMiddleware,foodControllers.createFood)

module.exports = router