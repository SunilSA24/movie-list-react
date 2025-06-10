import { useEffect, useState } from "react";
import axios from 'axios';
import MovieCard from './MovieCard';
import Pagination from "./Pagination";

function Movies() {

  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handleNext = () => {
    setPageNo(pageNo+1);
  };

  const handlePrev = () => {
    if(pageNo > 1) {
      setPageNo(pageNo-1);
    }
  };

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`)
      .then((res) => {
        console.log('Movies', res);
        setMovies(res.data.results);
      });
  }, [pageNo])
  return (
    <div className="min-h-screen">
      <div className="text-4xl font-bold text-center m-5">Trending Movies</div>

      {/* Movies */}

      <div className="flex justify-evenly gap-8 flex-wrap">
        {movies.map((movie, i) => {
          return (
            <MovieCard
              key={i}
              movieObj={movie}
            />
          );
        })}
      </div>

      {/* Pagination */}
      <Pagination
        nextPageFn={handleNext}
        previousPageFn={handlePrev}
        pageNumber={pageNo}
      />

    </div>
  )
}

export default Movies