const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

// Loading the models
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

/*
 * @route   POST api/users/register
 * @desc    Register user route
 * @access  Public
 */
router.get('/register', async(req, res, next) => {
    try{
        const user = await User.findOne({ email: req.body.email })
        if(user){
            res.status(400).json({ email: 'Email already exist'})
        }else{
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                avatar: req.body.avatar,
                password: req.body.password
            })

            bcrypt.genSalt(10, (err) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err
                    newUser.password = hash
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err))
                })      
            })
        }
    }catch(e){
        next(e)
    }
})

module.exports = router