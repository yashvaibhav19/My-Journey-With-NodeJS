const express = require('express')
require('./db/mongoose-redundant') 

const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get('/',(req,res)=>{
    res.send({
        message: 'Hello Human',
        author: 'Yash Vaibhav'
    })
})



app.listen(port,()=>{
    console.log('Active on port',port)
})