const { decode } = require('node:punycode')
const foodPartnerModel = require('../models/foodPartner.model.js')
const jwt = require('jsonwebtoken')


async function authFoodPartnerMiddleware(req, res, next) {
    const token = request.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const foodPartner = await foodPartner.findOne(decoded.id)
        req.foodPartner = foodPartner
        next()

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token/unauthorized access"
        })
    }
}

module.exports = {
    authFoodPartnerMiddleware
}