import {useEffect, useState} from 'react'

const Home = () => {
    const [workouts, setWorkouts] = useState()

    useEffect(() =>{
        const fetchWorkout = async () =>{
            const response = await fetch('https://localhost/4000/api/workouts')
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
                <p key={workout._id}>{workout.title}</p>
            ))}
        </div>
    </div>
  )
}

export default Home