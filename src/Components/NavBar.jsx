import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function NavBar() {
  return (
      <div className="flex items-center space-x-8 pl-3 py-4">
        <Link to="/">
          <img className="w-20" src={Logo} alt="logo" />
        </Link>
        <Link to="/" className="text-blue-500 text-3xl font-bold">Movies</Link>
        <Link to="/watchList" className="text-blue-500 text-3xl font-bold">WatchList</Link>
      </div>
    
  )
}

export default NavBar