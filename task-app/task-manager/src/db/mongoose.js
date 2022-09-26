const mongoose = require('mongoose')
const { isEmail } = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const users = mongoose.model('users',{
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if(isEmail(value) === false)
                throw new Error('Invalid Email')
        }
    },
    age: {
        type: Number,
        validate(value){
            if(value<0)
                throw new Error('Age must be a whole number')
        }
    }
})

// new Task({
//     description: 'Finish OCaml project',
//     completed: false
// }).save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

new users({
    name: 'Prashant Singhania',
    email: 'psinghania@gmacom',
    age: 2
}).save().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})