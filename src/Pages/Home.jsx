import React, { useEffect } from 'react'
import { GifState } from '../Context/GifContext'
import Gif from '../Components/Gif'

const Home = () => {

  const  {gf,gifs,setGifs,filter} = GifState()

const fetchTrendingGifs =async()=>{
  const {data} = await gf.trending({
    limit:20,
    type :filter,
    rating : 'g'
  });
  setGifs(data);
}

useEffect(()=>{
  fetchTrendingGifs();
},[filter])


  return (
    <div>
      <img 
      src='/banner.png'
      alt='earth banner'
      className='mt-2 rounded w-full' 

      />
      <div>
        {
          gifs.map((gif)=>{
            <Gif />
          })
        }
      </div> 
    </div>
  )
}

export default Home