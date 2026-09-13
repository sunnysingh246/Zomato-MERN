const express = require('express')
const authController = require('../controllers/auth.controller.js')

const router = express.Router()

//user auth APIs
router.post('/user/register', authController.registerUser)
router.post('/user/login', authController.loginUser)
router.get('/user/logout', authController.logoutUser)

//Food partner APIs
router.post('/foodPartner/register', authController.registerFoodPartner)
router.post('/foodPartner/register', authController.loginFoodPartner)
router.get('/foodPartner/register', authController.logoutFoodPartner)

module.exports = router;