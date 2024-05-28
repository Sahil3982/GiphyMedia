import React, { useEffect, useState } from 'react'
import { GifState } from '../Context/GifContext'
import { useParams } from 'react-router-dom';
import FilterGif from '../Components/FilterGif'
import Gif from '../Components/Gif'
const Search = () => {
  const [searchResults, setSearchResults] = useState([])
  const { gf, filter } = GifState();
  const { query } = useParams();
  const fetchSearchResults = async () => {
    const {data} =await gf.search(query,{
      sort : "relevent",
      lang : 'en',
      type : filter,
      limit : 20,
    });

    setSearchResults(data);
  }

  useEffect(()=>{
    fetchSearchResults();
  },[filter]);

  return (
    <div className='my-4'>
      <h2 className='text-5xl pb-3 font-extrabold'>{query}</h2>
      <FilterGif alignLeft = {true} />
      {
        searchResults.length >0 ? (
          <div className='column-2 md:columns-3 lg:columns-4 gap-2' >
          {
            searchResults.map((gif)=>(
              <Gif gif={gif} key={gif.id} />
            ))
          }
          </div>
        ) : (
            <span>
              No GIFs found for {query}. Try searching for Stickers instead?
            </span>
        )
      }
    </div>
  )
}

export default Search