const express = require('express');
const app = express();
const db =require('./db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;


const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Welcome to my Hotel...How may I help you');
});


// import router file
const personRoutes=require('./routes/personRoutes');

const menuRoutes= require('./routes/menuRoutes');
//use the router
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


app.listen(PORT,()=>{
  console.log('Listening on port 3000');
});