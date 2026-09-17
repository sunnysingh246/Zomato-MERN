const express = require('express')
const router = express.Router()
const authMiddleWare = require('../middlewares/auth.middleware.js')
const foodControllers = require('../controllers/food.controller.js')
const multer = require('multer')

const upload = multer({
    storage: multer.memoryStorage()
})

/* POST /api/food/ [protected] */
router.post('/',
    authMiddleWare.authFoodPartnerMiddleware,
    upload.single("video"),
    foodControllers.createFood
)

/* GET /api/food/ [public feed] */
router.get('/', foodControllers.getFoodItems)


module.exports = router  