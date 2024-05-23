import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuKebab } from "react-icons/ci";
import { HiMiniBars3BottomRight } from 'react-icons/hi2';


const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false)

  return (
    <nav>
      <div className='relative flex  justify-between items-center mb-2'>
        <Link to='/' className='flex gap-1' >
          <img src='/logo.png' className='w-8' alt='Giphy Logo'></img>
          <h1 className='text-5xl font-extrabold tracking-tight cursor-pointer'>GIPHY</h1>
        </Link>
        <div className='flex font-bold text-md gap-2 items-center justify-center'>
        <Link className='px-4 py-1 hover:gradient border-b-4 hidden lg:block'>
          Reactions
        </Link>
        <button onClick={() => setShowCategories(!showCategories)}>
          <CiMenuKebab size={35} className={`py-0.5 hover:gradient ${showCategories ? 'gradient' : ''} border-b-4 hidden lg:block`} />

        </button>
        <div className='h-9 bg-gray-600 pt-1.5 px-6 cursor-pointer rounded'>
          <Link to='/favorites'>Favorite GIFs</Link>
        </div>
        <button>
          <HiMiniBars3BottomRight size={30} className='text-sky-400 block lg:hidden' />
        </button>
        </div>
    


      {showCategories && <div className='absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20 '>
        <span>Categories</span>
        <hr />
        <div>

        </div>
      </div>

      }
      </div>

    </nav>
  )
}

export default Header