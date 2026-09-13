const express = require('express')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes.js')
const foodRouter = require('./routes/food.routes.js')

const app = express()
app.use(express.json())
app.use(cookieParser)

app.get('/', (req, res) => {
    res.send("Hey user")
})

app.use('/api/auth', authRoutes)
app.use('/api/food', foodRouter)

module.exports = app