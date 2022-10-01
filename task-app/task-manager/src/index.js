const express = require('express')
require('./db/mongoose-redundant') 

const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send({
        message: 'Hello Human',
        author: 'Yash Vaibhav'
    })
})

app.post('/users', async (req,res)=>{
    const newUser = new User(req.body)
    try {
        const result = await newUser.save()
        console.log(result)
        res.send(result)
    } catch(error) {
        console.log(error)
        res.status(500).send()
    }
})
app.get('/users', async (req,res)=>{
    try {
        const matches = await User.find({})
        console.log(matches)
        res.send(matches)
    } catch(error) {
        console.log(error)
        res.status(500).send(error)
    }
})
app.get('/users/:name',async(req,res)=>{
    try {
        const result = await User.find({"name": req.params.name})
        console.log(result[0])
        res.send(result[0])
    } catch(error) {
        console.log(error)
        res.status(500).send(error)
    }
})

app.get('/tasks/:id',async (req,res)=>{
    try {
        const fetchedTask = await Task.findById(req.params.id)
        if(!fetchedTask) return res.status(404).send('Task Not Found')
        res.send(fetchedTask)
    } catch(error) {
        res.status(500).send('Server Error')
    }
})
app.post('/tasks', async (req,res)=>{
    const newTask = new Task(req.body)
    try {
        const result = await newTask.save()
        console.log(result)
        res.send(result)
    } catch(error) {
        console.log(error)
        res.status(400)
        res.send(error)
    }
})

// Update DataBase 
app.patch('/users/:id', async (req,res)=>{
    try {
        const matchedUser = await User.findByIdAndUpdate(req.params.id , req.body, {
            new: true,
            runValidators: true  
        })
        if(!matchedUser) return res.status(404).send('No One Matches Your Description')
        res.send(matchedUser)
    } catch(error) {
        res.status(500).send('God Bless Your Query')
    }
})
app.patch('/tasks/:id', async (req,res)=>{
    try {
        const matchedUser = await Task.findByIdAndUpdate(req.params.id , req.body, {
            new: true,
            runValidators: true  
        })
        if(!matchedUser) return res.status(404).send('No One Matches Your Description')
        res.send(matchedUser)
    } catch(error) {
        res.status(500).send('God Bless Your Query')
    }
})


// Delete from DataBase
app.delete('/users/:id',async (req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id , { new: true})
        if(!user) return res.status(404).send('Not Found')
        res.send(user)
    } catch(error) {
        res.status(500).send('Something Bad Happened')
    }
})
app.listen(port,()=>{
    console.log('Active on port',port)
})