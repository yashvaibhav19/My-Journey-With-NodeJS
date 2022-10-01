const mongoose = require('mongoose')
const { isEmail } = require('validator')

const User = mongoose.model('User',{
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(!isEmail(value.toLowerCase())) throw new Error('Invalid Email')
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    age: {
        type: Number
    }
})

module.exports = User