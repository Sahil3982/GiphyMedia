import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div className='relative flex gap-4 justify-between items-center mb-2'>
        <Link to='/' className='flex gap-1' >
          <img src='/logo.png' className='w-8' alt='Giphy Logo'></img>
          <h1 className='text-5xl font-extrabold tracking-tight cursor-pointer'>GIPHY</h1>
        </Link>
        <Link className='px-4 py-1 hover:gradient border-b-4 hidden lg:block'>
          Reactions
        </Link>
        <button>

        </button>
      </div>
      <div>
       
      </div>
    </nav>
  )
}

export default Header