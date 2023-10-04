//importing dependencies
require('dotenv').config();
const express = require('express');
const app = express();

//importing the routes folder to get the routes
const workoutRoutes = require('./routes/workouts')

//middleware
app.use(express.json());
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
});

//mapping them on the app
app.use('/api/workouts', workoutRoutes)

//listening to the port
app.listen(process.env.PORT, () =>{
    console.log("The server is running on port", process.env.PORT);
});
