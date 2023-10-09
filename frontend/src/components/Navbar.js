import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar bg-white w-full h-[80px] flex items-center font-serif'>
        <Link className='px-12 w-full'>
           <h1 className='text-4xl font-bold'> Work Geeks</h1>
        </Link>
    </div>
  )
}

export default Navbar