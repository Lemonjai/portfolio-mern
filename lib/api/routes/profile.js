const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

const config = require('../config/config')

/*
 * @route   POST api/profile/test
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

module.exports = router