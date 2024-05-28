import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Gif from '../Components/Gif';
import { GifState } from '../Context/GifContext';
import FollowOn from '../Components/FollowOn';

const Category = () => {
  const [results, setResults] = useState([]);
  const { gf } = GifState();
  const { category } = useParams();
  const fetchResults = async () => {
    const { data } = await gf.gifs(category, category);
    setResults(data);
  }
  useEffect(() => {
    fetchResults();
  }, [category])
  return (
    <div className='flex flex-col sm:flex-row gap-5 my-4'>
      <div className='w-full sm:w-72'>

        {
          results > 0 && <Gif gif={results[0]} hover={false} />
        }
        <span className='text-gray-400 text-sm pt-2'>
          Don't  a post tell it to me, GIF it to me !
        </span>
        <FollowOn />
      </div>

    </div>
  )
}

export default Category