const express = require('express');

//created a router
const router = express.Router();

//GET all workouts
router.get('/', (req, res) =>{
    res.json({message: 'GET all workouts'});
});

//GET a single workout
router.get('/:id', (req, res) =>{
    res.json({message: 'GET a single workout'});
});

//POST a workout
router.post('/', (req, res) =>{
    res.json({message: 'POST a new workout'});
});

//DELETE a workout
router.delete('/:id', (req, res) =>{
    res.json({message: "DELETE a workout"});
});

//UPDATE a workout
router.patch('/:id', (req, res) =>{
    res.json({message: "UPDATE a workout"});
});

//exported the router
module.exports = router;