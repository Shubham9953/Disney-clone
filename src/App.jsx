import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import ProductionHouse from './components/ProductionHouse/ProductionHouse'
import GenreMovieList from './components/GenreMovieList/GenreMovieList'

function App() {
 const [count, setCount] = useState(0)

  return (
    <div>
    <Header/>
    <Slider/>
    <ProductionHouse/>
    <GenreMovieList/>
    </div>
  )
}

export default App
