import { useContext, useEffect } from "react";

import MovieCard from './MovieCard';
import Pagination from "./Pagination";
import { MovieContext } from "./MovieContext";
import { useDispatch, useSelector } from "react-redux";
import PaginationSlice from "../Redux/paginationSlice";
import fetchMovieMiddleware from "../Redux/movieMiddleware";

const paginationActions = PaginationSlice.actions;

function Movies() {

  const { movies, error, loading } = useSelector((state) => state.MovieSlice)
  const { watchList, addToWatchList, removeFromWatchList } = useContext(MovieContext);

  const { pageNo } = useSelector((state) => state.PaginationSlice);

  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(paginationActions.handleNext());
  };

  const handlePrev = () => {
    dispatch(paginationActions.handlePrevious());
  };

  useEffect(() => {
    dispatch(fetchMovieMiddleware(pageNo));
  }, [pageNo]);

  if (loading) {
    return (
      <div>
        <div className="text-4xl font-bold text-center m-5">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <div className="text-4xl font-bold text-center m-5">
          Something went wrong!
        </div>
      </div>
    )
  }



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
              addToWatchList={addToWatchList}
              removeFromWatchList={removeFromWatchList}
              watchList={watchList}
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