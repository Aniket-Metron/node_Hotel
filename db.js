//* db.js used to conneect mongodb to node js */
const mongoose = require('mongoose');

// define the mongodb connecction URL

const mongoURl= 'mongodb://localhost:27017/hotels'

//  to connect to db ---have to pass this parameter as it is

mongoose.connect(mongoURl, {
    useNewUrlParser : true,
    useUnifiedTopology : true  
});

// get default connection
// mongoose maintains a default connection object representing the mongodb connection\
const db=mongoose.connection;

// db.on("listner", any function/log to print)
db.on('connected' ,()=> {
    console.log('Connected to MongoDB server');
});

db.on('error' ,()=> {
    console.log('MongoDB connection erroe:',err);
});

db.on('disconnected' ,()=> {
    console.log('MongoDB disconnected');
});


// export the db connection

module.exports=db