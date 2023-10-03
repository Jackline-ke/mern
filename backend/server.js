require('dotenv').config();
const express = require('express');
const app = express();

//listening to a route 
app.get('/', (req, res) =>{
    res.status(200).send("Welcome Qlynn to Mern Stack Development");
})

//listening to the port
app.listen(process.env.PORT, () =>{
    console.log('The server is running on port', process.env.PORT);
});