// Required classes
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Custom classes
const config = require('../config/config')

// Loading the models
const Profile = require('../model/Profile')
const User = require('../model/User')

/*
 * @route   GET api/profile/test
 * @desc    Test profile route
 * @access  Public
 */
router.get('/test', async(req, res, next) => {
    try{
        const docs = await {msg: 'Profile route is working'}
        res.status(200).json(docs)
    }catch(e){
        next(e)
    }
})

/*
 * @route   GET api/profile
 * @desc    Get current profile route
 * @access  Private
 */
router.get('/', passport.authenticate('jwt', { session: false }), async(req, res, next) => {

    const errors = {}

    try{
        const profile = await Profile.findOne({ user: req.user.id })
        if(!profile){
            errors.noprofile = 'There is no profile for this users'
            return res.status(404).json(errors)
        }else{
            res.json(profile)
        }
    }catch(e){
        next(e)
    }
})

/*
 * @route   POST api/profile
 * @desc    Create/Update current profile route
 * @access  Private
 */
router.post('/', passport.authenticate('jwt', { session: false }), async(req, res, next) => { 
    
    // Get fields
    const profileFields = {}
    profileFields.user = req.user.id
    
    if(req.body.location) profileFields.location = req.body.location
    if(req.body.bio) profileFields.bio = req.body.bio
    if(req.body.company) profileFields.company = req.body.company
    // Skills
    if(typeof req.body.skills !== 'undefined'){
        profileFields.skills = req.body.skills.split(',')
    }
    // Social Media
    profileFields.social = {}
    if(req.body.linkedin) profileFields.social.linkedin = req.body.linkedin
    if(req.body.instagram) profileFields.social.instagram = req.body.instagram
    if(req.body.github) profileFields.social.github = req.body.github
    if(req.body.angellist) profileFields.social.angellist = req.body.angellist

    try{
        const Profile = await Profile.findOne({ user: req.user.id })
        
        if(profile){
            // Update the profile
            Profile.findOneAndUpdate(
                { user: req.user.id}, 
                {$set: profileFields }, 
                { new: true }
            ).then(profile => res.json(profile))
        }else{
            // Create new profile
            new Profile(profileFields).save().then(profile => res.json(profile))
        }
    }catch(e){
        next(e)
    }
})

module.exports = router