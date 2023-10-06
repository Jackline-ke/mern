const Workout = require('../models/WorkoutModel')

//get all workouts
const getWorkouts = async (req, res) =>{
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts)
}

//get a single workout


//post a workout
const createWorkout = async (req, res) =>{
    const {title, reps, loads} = req.body;
    try{
        const workout = await Workout.create({title, reps, loads});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({ error: error.message});
    }
}

//update a workout


//delete a workout

module.exports = {
    createWorkout,
    getWorkouts
}