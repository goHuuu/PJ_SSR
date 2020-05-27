const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
//midleware


//ROUTES
app.get('/', (req, res) => {
    res.send('Home');
});
app.get('/test', (req,res) => {
    res.send('test');
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log("connected to database")
);


//LISTENING
app.listen(3000);