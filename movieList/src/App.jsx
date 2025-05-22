import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import WatchList from './Components/WatchList'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/watchList' element={<WatchList />}></Route>
      </Routes>

    </>
  )
}

export default App
