const mongoose = require('mongoose')

function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Server connected to database")
        })
        .catch((error) => {
            console.log("Failed to connect with database", error)
        })
}

module.exports=connectDB