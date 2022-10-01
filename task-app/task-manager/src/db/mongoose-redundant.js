const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')




// new User({ //To add a new user
//     name: 'Boibhob',
//     age: 22
// }).save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })
