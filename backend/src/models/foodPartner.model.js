const mongoose = require('mongoose')
const { type } = require('node:os')

const foodPartnerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    businessName: {
        type: String,
        required: true
    },

    contactNumber: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    businessAddress: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    }

})


const foodPartnerModel = mongoose.model("foodPartner", foodPartnerSchema)
module.exports = foodPartnerModel