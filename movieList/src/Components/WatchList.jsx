import { useEffect } from "react";

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
    <div>WatchList</div>
  )
}

export default WatchList