import { useEffect, useState } from "react";
import genreids from "../assets/genre";

function WatchList() {
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
      let moviesFromLocalStorage = localStorage.getItem('movies')
      if(!moviesFromLocalStorage) {
        return
      }

      setWatchList(JSON.parse(moviesFromLocalStorage));
    }, [])
  
  return (
    <div  className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5" >
    {/* Watchlist table */}
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex items-center gap-2">
                <div>Ratings</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Popularity</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Genre</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList.map((movieObj) => (
              <tr key={movieObj.id} className="hover:bg-gray-50">
                <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                  <img
                    className="h-[6rem] w-[10rem] object-fit"
                    src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                    alt="movie poster"
                  />
                  <div className="font-medium ml-3 text-gray-700 text-sm">
                    {movieObj.title}
                  </div>
                </td>
                <td className="pl-6 py-4">{movieObj.vote_average}</td>
                <td className="pl-6 py-4">{movieObj.popularity}</td>
                <td className="pl-2 py-4">{genreids[movieObj.genre_ids[0]]}</td>
              </tr>
            ))}
        </tbody>
      </table></div>
  )
}

export default WatchList