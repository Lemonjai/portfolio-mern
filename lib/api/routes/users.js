const express = require('express')
const router = express.Router()

const User = require('../model/User')

/*
 * @route   GET api/users/test
 * @desc    Test user route
 * @access  Public
 */
router.get('/test', async(req, res, next) => {
    try{
        const docs = await { message: 'Able to connect User model'}
        res.status(200).send(docs)
    }catch(e){
        next(e)
    }
})

module.exports = router