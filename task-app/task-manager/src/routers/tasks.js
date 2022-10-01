const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.get('/tasks', async (req,res)=>{
    try {
        const taskList = await Task.find({})
        if(!taskList) return res.status(404).send('No task remaining')
        res.send(taskList)
    } catch(error) {
        res.status(500).send('Something broke down')
    }
})
router.get('/tasks/:id',async (req,res)=>{
    try {
        const fetchedTask = await Task.findById(req.params.id)
        if(!fetchedTask) return res.status(404).send('Task Not Found')
        res.send(fetchedTask)
    } catch(error) {
        res.status(500).send('Server Error')
    }
})
router.post('/tasks', async (req,res)=>{
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

router.patch('/tasks/:id', async (req,res)=>{
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


module.exports = router