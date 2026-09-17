const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email must be unique']
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

const userModel = mongoose.model('User', userScheme)

module.exports = userModel