
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

// User API health check
router.get('/test', async (req, res, next) => {
    const docs = await { msg: 'Project API online' }
    res.status(200).send(docs)
})

// Export the module
module.exports = router