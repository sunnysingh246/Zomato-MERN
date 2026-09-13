const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    video: {
        type: String,
        required: true
    },

    description: {
        tyoe: String
    },

    foodPartner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodPartner"
    }
})

const foodModel = mongoose.mongo.model("food", foodSchema)
module.exports = foodModel