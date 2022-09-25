// CRUD operations in MongoDB
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient; //provides everything necessary to connect to DB

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true},(error,client)=>{
    if(error) return console.log('An Error Occured');
    
    const db = client.db(databaseName);
    // db.collection('users').insertMany([
    //     {
    //         name: 'Pratyush Singh',
    //         age: 22
    //     },
    //     {
    //         name: 'Archit Raj Lal',
    //         age: 23
    //     },
    //     {
    //         name: 'Ashish Singh Bhadoria',
    //         age: 22
    //     }
    // ]);
    db.collection('task').insertMany([
        {
            name: 'Fork Lift Boxes',
            time: 4,
            rate: 20
        },
        {
            name: 'Code A Web App',
            time: 20,
            rate: 42
        },
        {
            name: 'Make Dinner',
            time: 1,
            rate: 0
        }
    ])
})