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

module.exports = router