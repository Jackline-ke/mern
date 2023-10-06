//importing dependencies
const express = require('express');
const { createWorkout, getWorkouts } = require('../controllers/workoutController');
const router = express.Router()

//GET workouts
router.get('/', getWorkouts);

//GET a single workout
router.get('/:id', (req, res) =>{
    res.json({message: "GET a single workouts"})
});

//POST a new workout
router.post('/', createWorkout)

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

