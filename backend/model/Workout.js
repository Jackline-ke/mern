const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    reps: {
        type: Number,
        require: true
    },
    loads: {
        type: Number,
        require: true
    }
}, { timestamps: true });