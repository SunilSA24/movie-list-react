import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import WatchList from './Components/WatchList';
import NavBar from './Components/NavBar';
import MovieContextWrap from './Components/MovieContextWrap';
import { Provider } from 'react-redux';
import store from "./Redux/store";

function App() {

  return (
    <Provider store={store}>
      <MovieContextWrap>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/watchList' element={<WatchList />}></Route>
        </Routes>
      </MovieContextWrap>
    </Provider>
  )
}

export default App
