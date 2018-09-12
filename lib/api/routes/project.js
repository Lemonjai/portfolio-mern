
/*
 * Author(s):
 * Leo Cheung
 */

//  Required packages
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load configs
const keys = require('../configs/keys')

// Load project model
const Project = require('../models/Project')
const User = require('../models/User')

// User API health check
router.get('/test', async (req, res, next) => {
    const docs = await { msg: 'Project API online' }
    res.status(200).send(docs)
})

/* 
 + Profile API - POST
 * DESC:    Create a project
 * PATH:    /project/
 * ACCESS:  Private
 */
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res, next) => {

    try{
        const newProject = await new Project({
            title: req.body.title,
            avatar: req.body.avatar,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description,
            technology: req.body.technology.split(',')
        })
    
        newProject.save().then(project => res.json(project))
    }catch(e){
        next(e)
    }
    
})

/* 
 + Profile API - GET
 * DESC:    Get all the project
 * PATH:    /project/all
 * ACCESS:  Public
 */

router.get('/all', async(req, res, next) => {
    try{
        const project = Project.find()
        project.sort({ date: -1})
            .then(projects => res.json(projects))
            .catch(err => res.status(404).json({ noproject: 'No projects found'}))
    }catch(e){
        next(e)
    }
})

/* 
 + Profile API - GET
 * DESC:    Get a single project
 * PATH:    /project/:id
 * ACCESS:  Public
 */
router.get('/:id', async(req, res, next) => {
    try{
        const project = Project.findById(req.params.id)
        project.then(projects => res.json(projects))
            .catch(err => res.status(404).json({ noproject: 'No project found with that ID'}))
    }catch(e){
        next(e)
    }
})

/* 
 + Profile API - DELETE
 * DESC:    Delete project
 * PATH:    /project/:id
 * ACCESS:  Private
 */
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Project.findOne({ user: req.user.id})
        .then(project => {
            Project.findById(req.params.id)
            // Check for project owner
            if(project.user.toString() !== req.user.id){
                return res.status(401).json({ notauthorized: 'User not authorized'})
            }
            // Delete
            project.remove().then(() => json({sucess: true}))
        })
        .catch(err => res.status(404).json({ noproject: 'No project found'}))
})

// Export the module
module.exports = router