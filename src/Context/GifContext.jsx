import { GiphyFetch } from "@giphy/js-fetch-api";
import { Children, createContext, useContext, useState } from "react";
const GifContext = createContext();

const GifProvider = ({ children }) => {
    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState('gifs');
    const [favorites, setFavorites] = useState([]);

    const gf = new GiphyFetch("1dK7qYFFRZFYQmtCEhYN0ljBCYy0lPgH")
    return <GifContext.Provider value={{ gf, gifs, setGifs, filter, setFilter, favorites }}>{children}</GifContext.Provider>;


}

export const GifState = () => {
    return useContext(GifContext)
}

export default GifProvider;