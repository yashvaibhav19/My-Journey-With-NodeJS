const path = require('path'); // require core modules before npm modules
const hbs = require('hbs');
const express = require('express');

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsDirectoryPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

const port = process.env.PORT || 3000

app.set('view engine','hbs');
app.set('views',viewsDirectoryPath);

hbs.registerPartials(partialsPath)
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
    if(!req.query.search)
    {
        return res.send({
            error: 'Please Provide a Search Query'
        })
    }
    res.send('send this when route:invoice is triggered');
})

//error page
app.get('*',(req,res)=>{
    res.send('An error occured, please go back to home')
})
app.listen(port,()=>{
    console.log('server has started functioning');
});