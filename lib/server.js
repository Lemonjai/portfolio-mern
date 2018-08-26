// Required classes
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

// Custom classes
const users = require('./api/routes/users')

// Config keys
const keys = require('./api/config/config')

// Setting up the port
const PORT = process.env.PORT || 5000
const app = express()

// BodyParser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Healthcheck user route
app.get('/healthcheck', async(req, res, next) => {
    const docs = await { message: 'Backend Server online'}
    res.status(200).send(docs)
})

// Custom routes
app.use('/users', users)

// Passport middleware & config
app.use(passport.initialize())
require('./api/config/passport')(passport)


// Port and connection to mongoose
app.listen(PORT, async() => {
    await mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
    console.log(`Listening on port: ${PORT}`)
})