const express = require('express')
require('./db/mongoose-redundant') 
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send({
        message: 'Hello Human',
        author: 'Yash Vaibhav'
    })
})

app.post('/users',(req,res)=>{
    const newUser = new User(req.body)
    newUser.save().then((result)=>{
        console.log(result)
        res.send(result)
    }).catch((error)=>{
        res.status(400)
        res.send(error)
    })
})

app.listen(port,()=>{
    console.log('Active on port',port)
})