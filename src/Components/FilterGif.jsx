import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { GifState } from "../Context/GifContext";

const filter = [
    {
        title: "GIFs",
        value: "gifs",
        background: "bg-gradient-to-tr from-purple-500 via-purple-600 to-purple-500"
    },
    {
        title: "Stickers",
        value: "stickers",
        background: "bg-gradient-to-tr from-teal-500 via-teal-600 to-teal-500"
    },
    {
        title: "Texts",
        value: "texts",
        background: "bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-500"
    },
];


const FilterGif = ({ alignLeft = false, showTrending = false }) => {
    const { filters, setFilters } = GifState();
    return (
        <div className={`flex my-3 gap-3 ${alignLeft ? "" : "justify-end"} ${showTrending ? "justify-between flex-col sm:flex-row sm:item-center" : ""}`}>
            {
                showTrending && (
                    <span className="flex gap-3 p-1">
                        {
                            showTrending && (
                                <HiMiniArrowTrendingUp size={25} className="text-teal-400" />

                            )
                        }
                        <span className="font-semibold text-gray-400">Trending</span>
                    </span>
                )
            }

            <div className="flex min-w-80 rounded-full bg-gray-700">
                {
                    filter.map((f) => {
                        return <span
                            key={f.title}
                            onClick={() => setFilters(f.value)}
                            className={`${filter === f.value ? f.background : ""} font-semibold py-2 w-1/3 text-center rounded-full cursor-pointer`}>{f.title}</span>
                    })
                }
            </div>

        </div>
    )
}

export default FilterGif