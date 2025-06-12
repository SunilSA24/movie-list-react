import { useEffect, useState } from "react";
import genreids from "../assets/genre";

function WatchList() {
  const [watchList, setWatchList] = useState([]);
  const [search, setSearch] = useState("");
  const [currGenre, setCurrGenre] = useState("All")
  const [genreList, setGenreList] = useState([]);


  const handleAscendingRating = () => {
    let sortAscending = watchList.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setWatchList([...sortAscending]);
  }

  const handleDescendingRating = () => {
    let sortDescending = watchList.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });

    setWatchList([...sortDescending]);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('movies')
    if (!moviesFromLocalStorage) {
      return
    }

    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, [])

  useEffect(() => {
    let genreList = watchList.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    })

    genreList = new Set(genreList);
    setGenreList(["All", ...genreList]);
  },[watchList])

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5" >
      {/* Search Field */}
      <div className="flex justify-center m-10">
        <input type="text" name="search" id="search"
          value={search}
          onChange={handleSearch}
          className="border border-gray-500 h-[3rem] w-[18rem] px-3" />
      </div>

      {/* Genre list */}
      <div className="flex justify-center m-4">
        {genreList.map((genre) => {
          return (
            <div
              key={genre}
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl cursor-pointer"
                  : "mx-4 flex justify-center items-center bg-gray-400 h-[3rem] w-[9rem] text-white border rounded-xl cursor-pointer"
              }
            >
              {genre}
            </div>
          )
        })}

      </div>


      {/* Watchlist table */}
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex items-center gap-2">
                <i onClick={() => handleDescendingRating()} className="fa-solid fa-arrow-up"></i>
                <div>Ratings</div>
                <i onClick={() => handleAscendingRating()} className="fa-solid fa-arrow-down"></i>
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
          {watchList
            .filter((movie) => {
              if(currGenre === 'All') {
                return true
              }

              return genreids[movie.genre_ids[0]] === currGenre;
            })
            .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
            .map((movieObj) => (
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