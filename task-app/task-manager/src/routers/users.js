const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/users', async (req,res)=>{
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
router.get('/users', async (req,res)=>{
    try {
        const matches = await User.find({})
        console.log(matches)
        res.send(matches)
    } catch(error) {
        console.log(error)
        res.status(500).send(error)
    }
})
router.get('/users/:name',async(req,res)=>{
    try {
        const result = await User.find({"name": req.params.name})
        console.log(result[0])
        res.send(result[0])
    } catch(error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.patch('/users/:id', async (req,res)=>{
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

router.delete('/users/:id',async (req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id , { new: true})
        if(!user) return res.status(404).send('Not Found')
        res.send(user)
    } catch(error) {
        res.status(500).send('Something Bad Hrouterened')
    }
})

module.exports = router