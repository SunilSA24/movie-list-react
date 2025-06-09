
const MovieCard = ({movieObj}) => {
  return (
     <div
      className={`h-72 rounded-lg w-48 bg-center justify-between bg-cover flex items-end hover:scale-110 duration-300`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`,
      }}
    > 
     <div className="text-white w-full text-center text-xl p-2 rounded-lg bg-gray-900">
        {movieObj.title}
      </div>
    </div>
  )
}

export default MovieCard