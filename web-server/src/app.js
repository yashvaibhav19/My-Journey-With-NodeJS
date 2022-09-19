const path = require('path'); // require core modules before npm modules
const hbs = require('hbs');
const express = require('express');

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsDirectoryPath = path.join(__dirname,'../templates/views');

app.set('view engine','hbs');
app.set('views',viewsDirectoryPath);
//example.com
app.get('',(req,res)=>{
    res.render('index',{
        name: 'Yash Vaibhav',
        dept: 'Electronics and Instrumentation',
        cgpa: '8.5'
    })
})
//example.com/about
app.get('/about',(req,res)=>{
    res.render('about',{
        createdOn : '18-09-2022'
    })
})

//example.com/invoice
app.get('/invoice',(req,res)=>{
    res.send('send this when route:invoice is triggered');
})

app.listen(3000,()=>{
    console.log('server has started functioning');
});