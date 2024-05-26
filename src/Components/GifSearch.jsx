import React, { useState } from 'react'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const GifSearch = () => {
    const [query, setQuery] = useState();
    const navigate = useNavigate();

    const serachGifs = async () => {
        if (query.trim() === "") {
            return;
        }
        navigate(`/search/${query}`)
    }

    return (
        <div className='flex relative'>
            <input
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='search all the GIFs and Stickers'
                className='w-full pl-4 pr-14 py-5 text-xl text-black rounded-tl rounded-bl border border-gray-300 outline-none'

            />
            <button
            onClick={serachGifs}
            className='bg-gradient-to-tr from-pink-500 to-pink-300 text-white px-4 py-2 rounded rounded-br'
            >
            <HiOutlineMagnifyingGlass size={35} className='-scale-x-100' />
            </button>
        </div>
    )
}

export default GifSearch