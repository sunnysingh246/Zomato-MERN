const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes.js')
const foodRouter = require('./routes/food.routes.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.get('/', (req, res) => {
    res.send("Hey user")
})

app.use('/api/auth', authRoutes)
app.use('/api/food', foodRouter)

module.exports = app