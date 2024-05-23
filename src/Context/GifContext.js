import { GiphyFetch } from "@giphy/js-fetch-api";
import { Children, createContext, useContext, useState } from "react";
const GifContext = createContext();

const GifProvider = ({ children }) => {
    const [gifs,setGifs] = useState([]);
    const [filter,setFilter] = useState('gifs');
    const [favorites,setFavorites] = useState([]);

    const gif = new GiphyFetch(import.meta.env.GIPHYURL)

    return <GifContext.Provider value={{gif}}>{children}</GifContext.Provider>;


}

export const GifState = ()=>{
    return useContext(GifContext)
}

export default GifProvider;