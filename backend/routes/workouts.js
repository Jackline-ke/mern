//importing dependencies
const express = require('express');

const router = express.Router()

//GET workouts
router.get('/', (req, res) =>{
    res.json({message: "GET all workouts"})
});

//GET a single workout
router.get('/:id', (req, res) =>{
    res.json({message: "GET a single workouts"})
});

//POST a new workout
router.post('/', (req, res) =>{
    res.json({message: "POST a new workout"})
});

//DELETE a workout
router.delete('/:id', (req, res) =>{
    res.json({message: "DELETE a workout"})
});

//UPDATE a workout
router.patch('/:id', (req, res) =>{
    res.json({message: "UPDATE a new workout"})
});

//export the router
module.exports = router

