import {useEffect, useState} from 'react'
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {
    const [workouts, setWorkouts] = useState()

    useEffect(() =>{
        const fetchWorkout = async () =>{
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkout()
    }, [])

  return (
    <div className='Home bg-slate-200 w-full h-[86vh] font-serif'>
        <div>
            {workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout= {workout} />
            ))}
        </div>
    </div>
  )
}

export default Home