const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true},(error,client)=>{
    if(error) return console.log('An Error Occured');
    
    const db = client.db(databaseName);
    // db.collection('users').findOne({
    //     name: 'Yash Vaibhav',
    //     age: 30
    // },(error, userData) =>{
    //     if(error) return console.log('An Error Occured');
    //     else if(userData === null) return console.log('Not Found');
    //     console.log(userData);
    // });

    // db.collection('users').find({age: 22}).count((error, data)=>{
    //     if(error) return console.log('An Error Occured');
    //     console.log(data);
    // });
    db.collection('users').deleteMany({ 
        age: 24
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})