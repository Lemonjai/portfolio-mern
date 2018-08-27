// Required classes
const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*
 * Profile Schema
 * @DESC - Past job experience, bio, social media
 */

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    location: {
        type: String,
        required: true
    },
    status :{
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    experience: [
        {
            title: {
                type: String,
                required: true
            },
            technology: {
                type: [String],
                required: true
            },
            company: {
                type: String,
                required: true
            },
            location: {
                type: String
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            summary: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    ],
    social :{
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        },
        github: {
            type: String
        },
        angellist: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
})
// Export the profile schema model
module.exports = Profile = mongoose.model('work', ProfileSchema)