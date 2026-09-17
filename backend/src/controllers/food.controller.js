const foodModel = require('../models/food.model.js')
const storageService = require('../services/storage.service.js')
const { v4: uuid } = require("uuid")

async function createFood(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: 'Please upload a food video.'
            })
        }

        const fileUploadResult = await storageService.uplaodFile(req.file.buffer, uuid())

        const foodItem = await foodModel.create({
            name: req.body.name,
            description: req.body.description,
            video: fileUploadResult.url,
            foodPartner: req.foodPartner._id
        })

        return res.status(201).json({
            message: 'Food created successfully',
            food: foodItem
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Unable to upload food video.',
            error: error.message
        })
    }
}

async function getFoodItems(req, res) {
    const foodItems = await foodModel.find({})
    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems
    })
}

module.exports = {
    createFood,
    getFoodItems
}
