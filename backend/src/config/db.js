const mongoose = require('mongoose')

function connectDB() {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zomato'

    mongoose.connect(mongoUri)
        .then(() => {
            console.log('Server connected to database')
        })
        .catch((error) => {
            console.log('Failed to connect with database', error)
        })
}

module.exports = connectDB