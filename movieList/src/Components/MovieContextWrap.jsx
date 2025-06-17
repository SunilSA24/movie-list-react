import { useState, useEffect } from "react";
import { MovieContext } from "./MovieContext";

export default function MovieContextWrap({ children }) {
    const [watchList, setWatchList] = useState([]);


    const addToWatchList = (movieObj) => {
        const updateWatchList = [...watchList, movieObj];
        setWatchList(updateWatchList);
        localStorage.setItem('movies', JSON.stringify(updateWatchList));
    }

    const removeFromWatchList = (movieObj) => {
        const filterWatchList = watchList.filter((movie) => {
            return movie.id !== movieObj.id;
        });
        localStorage.setItem('movies', JSON.stringify(filterWatchList));

    }

    useEffect(() => {
        let moviesFromLocalStorage = localStorage.getItem('movies')
        if (!moviesFromLocalStorage) {
            return
        }

        setWatchList(JSON.parse(moviesFromLocalStorage));
    }, []);

    return (
        <MovieContext.Provider value={{ addToWatchList, removeFromWatchList, watchList, setWatchList }}>
            {children}
        </MovieContext.Provider>
    )
}

