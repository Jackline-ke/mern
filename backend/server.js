require('dotenv').config();
const express = require('express');
const app = express();


app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next()
});

//listening to a route 
app.get('/', (req, res) =>{
    res.send("Hello Qlynn, welcome Mern Stack Development")
});
//post request
app.use(express.json())
app.post('/', (req, res) =>{
    const {name} = req.body;

    res.send(`Welcome to Mern Stack ${name}`)
})

//listening to the port
app.listen(process.env.PORT, () =>{
    console.log('The server is running on port', process.env.PORT);
});