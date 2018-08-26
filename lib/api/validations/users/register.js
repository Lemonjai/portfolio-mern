/*
 * Import required class
 */
const Validator = require('validator')
// Custom class for checking isEmpty
const isEmpty = require('../is-Empty')

// The validation class check for register
module.exports = function validateRegisterInput(data){
    // Errors declaration
    let errors = {}
    // Check if isEmpty
    data.firstName = !isEmpty(data.firstName) ? data.firstName : ''
    data.lastName = !isEmpty(data.lastName) ? data.lastName : ''
    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password : ''
    data.password2 = !isEmpty(data.password2) ? data.password2 : ''

    /**********************************************************
    ------------------ Check for first name -------------------
    **********************************************************/ 
    // Check for length
    if(!Validator.isLength(data.firstName, {min: 2, max: 30})){
        errors.firstName = 'First name must be between 2 and 30 characters'
    }
    // Check for isEmpty
    if(Validator.isEmpty(data.firstName)){
        errors.firstName = 'First name field is required'
    }

    /**********************************************************
    ------------------ Check for last name --------------------
    **********************************************************/ 
    // Check for length
    if(!Validator.isLength(data.lastName, {min: 2, max: 30})){
        errors.lastName = 'Last name must be between 2 and 30 characters'
    }
    // Check for isEmpty
    if(Validator.isEmpty(data.lastName)){
        errors.lastName = 'Last name field is required'
    }

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
    // Check for length
    if(!Validator.isLength(data.password, {min: 6, max: 30})){
        errors.password = 'Password must be between 6 and 30 characters'
    }
    // Check for isEmpty
    if(Validator.isEmpty(data.password)){
        errors.password = 'Password field is required'
    }

    /**********************************************************
    ------------------- Comparision Password ------------------
    **********************************************************/
    // Check for match
    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = 'Passwords does not match'
    }
    // Check for isEmpty
    if(Validator.isEmpty(data.password2)){
        errors.password2 = 'Confirm password field is required'
    }

    // Return errors
    return{
        errors,
        isValid: isEmpty(errors)
    }
}