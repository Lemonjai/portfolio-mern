// Required classes
const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*
 * Project Schema
 * @DESC - Skills, avatar and links to project
 */
const ProjectSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    github: {
        type: String,
        required: true
    },
    link: {
        type: String
    }
})
// Export the project schema model
module.exports = Project = mongoose.model('project', ProjectSchema)