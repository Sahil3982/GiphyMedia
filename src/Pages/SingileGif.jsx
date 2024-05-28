import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Gif from '../Components/Gif';
import { GifState } from '../Context/GifContext';
const contentType = ["gifs",'stickers',"texts"]
const SingileGif = () => {
  const {type,slug} = useParams();
  const [gif , setGif] = useState({})
  const {gf} = GifState()
  const [ relatedGifs , setRelatedGifs] = useState([])
  const fetchGf = async()=>{
    const gifId = slug.split("-");
    const {data} = await gf.gif(gifId[gifId.length-1]);
    const {data:related} = await gf.related(gifId[gifId.length -1],{
      limit : 10,
    });
    setGif(data)
    setRelatedGifs(related);
  }
  useEffect(()=>{
    if(!contentType.includes(type)){
      throw new Error("Invaild Content Type")
    }
    fetchGf();
  },[])
  return (
    <div className='grid grid-cols-4 my-10 gap-4'>
      <div className='hidden sm:block'>
        {
          gif?.user && (
            <>
              <div className='flex gap-1'>
                <img 
                src={gif?.user?.avatar_url}
                alt={gif?.user?.diplay_name} 
                className='h-14'
                />
                <div className='px-2'>
                  <div className='font-bold'>{gif?.user?.display_name}</div>
                  <div className='faded-text'>@{gif?.user?.username}</div>
                </div>
              </div>
            </>
          )
        }
      </div>
      <div className='col-span-4 sm:col-span-3'>
        <div className='flex gap-6'>
          <div className='w-full sm:w-3/4'>
            <div className=''>{gif.title}</div>
            <Gif gif={gif} hover={false} />
          </div>
          Favorites / Share / Embed
        </div>
      </div>
    </div>
  )
}

export default SingileGif