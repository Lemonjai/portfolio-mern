// Required classes
const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*
 * User Schema
 * @DESC - Basic information
 */
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// Export the user schema model
module.exports = User = mongoose.model('users', UserSchema)