import { GifState } from "../Context/GifContext";

const filter = [
    {
        title :"GIFs",
        value : "gifs",
        background : "bg-gradient-to-tr from-purple-500 via-purple-600 to-purple-500"
    },
    {
        title :"Stickers",
        value : "stickers",
        background : "bg-gradient-to-tr from-teal-500 via-teal-600 to-teal-500"
    },
    {
        title :"Texts",
        value : "texts",
        background : "bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-500"
    },
];


const FilterGif = () => {
    const {filter , setFilter} = GifState();
  return (
    <div>
    
    </div>
  )
}

export default FilterGif