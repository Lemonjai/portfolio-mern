/*
 * Import required class
 */
const Validator = require('validator')
// Custom class for checking isEmpty
const isEmpty = require('../is-Empty')

// The validation class check for login
module.exports = function validateLoginInput(data){
    // Errors declaration
    let errors = {}
    // Check if isEmpty
    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password : ''

    /**********************************************************
    --------------------- Check for Email ---------------------
    **********************************************************/
    // Check if email
    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is not valid'
    }
    // Check for isEmpty
    if(Validator.isEmpty(data.email)){
        errors.email = 'Email field is required'
    }

    /**********************************************************
    ------------------- Check for Password --------------------
    **********************************************************/
    
    // Check for isEmpty
    if(Validator.isEmpty(data.password)){
        errors.password = 'Password field is required'
    }

    // Return errors
    return{
        errors,
        isValid: isEmpty(errors)
    }
}