import './css/App.css'
import Home from "./pages/Home.jsx"
import Favorites from './pages/Favorites.jsx'
import { Routes, Route } from 'react-router-dom'
import NavBar from './pages/NavBar.jsx'

function App() {

  return (
    <>
    <NavBar></NavBar>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </main>
    </> 
    )
}

export default App
