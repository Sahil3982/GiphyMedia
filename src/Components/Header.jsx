import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuKebab } from "react-icons/ci";
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { GifState } from '../Context/GifContext';
import GifSearch from './GifSearch';


const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false)
  const { gf, gifs, filter, favorites } = GifState()

  const fetchGifCategories = async () => {
    const { data } = await gf.categories();
    setCategories(data)
    console.log(data);
  };

  useEffect(() => {
    fetchGifCategories();
  }, [])


  return (
    <nav>
      <div className='relative flex  justify-between items-center mb-2'>
        <Link to='/' className='flex gap-1' >
          <img src='/logo.png' className='w-8' alt='Giphy Logo'></img>
          <h1 className='text-5xl font-extrabold tracking-tight cursor-pointer'>GIPHY<strong className='text-pink-400'>Media</strong></h1>
        </Link>
        <div className='flex font-bold text-md gap-2 items-center justify-center'>
          {
            categories?.slice(0, 5)?.map((category) => (
              <Link className='px-4 py-1 hover:gradient border-b-4 hidden lg:block rounded'>
                {category.name}
              </Link>
            ))
          }

          <button onClick={() => setShowCategories(!showCategories)}>
            <CiMenuKebab size={35} className={`py-0.5 hover:gradient ${showCategories ? 'gradient' : ''} border-b-4 hidden lg:block rounded`} />

            {
              favorites.length > 0 && (
                <div className='h-9 bg-gray-600 pt-1.5 px-6 cursor-pointer rounded'>
                  <Link to='/favorites'>Favorites GIFs</Link>
                </div>
              )
            }
            <HiMiniBars3BottomRight size={30} className='text-sky-400 block lg:hidden' />
          </button>
        </div>



        {showCategories && <div className='absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20 rounded'>
          <span className='p-2 font-bold'>Categories</span>
          <hr className='m-2  text-gray-800' />
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
            {
              categories?.map((category) => {
                return <Link className='font-semibold p-2'
                  key={categories.name}
                  to={`/${category.name_encoded}`}>
                  {category.name}
                </Link>
              })
            }
          </div>
        </div>

        }
      </div>

      <GifSearch />

    </nav>
  )
}

export default Header