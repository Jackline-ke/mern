import React from 'react'

const WorkoutDetails = ({ workout }) => {
  return (
    <div className='px-12 py-8 flex flex-col gap-2'>
        <h1>{workout.title}</h1>
        <p><strong>Loads(Kg):</strong>{workout.loads}</p>
        <p><strong>Reps:</strong>{workout.reps}</p>
        <p><strong>CreatedAt:</strong>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails