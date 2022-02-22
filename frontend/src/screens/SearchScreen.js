import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Movie from '../components/Movie'
import MagnifyLogo from '../img/magnifying-glass-solid.svg'

const SearchScreen = () => {
  const location = useLocation()
  const [search, setSearch] = useState(location.state)
  const [movies, setMovies] = useState()

  useEffect(async () => {
    if(location.state && !movies) {
      searchHandler(location.state)
    }
  }, [movies])

  const searchHandler = async (text) => {
    const response = await axios.get('http://localhost:8000/movies/?search=' + text)
    setMovies(response.data)
  }

  return (
    <>
      <div className='container search-screen-container'>
        <Header/>
        <form className='search-contianer' onSubmit={(e) => {
          e.preventDefault()
          searchHandler(search)
        }}>
          <img src={MagnifyLogo} alt="magnify icon" className='search-logo'/>
          <input type='text' placeholder='Search...' className='search-input' onChange={(e) => setSearch(e.target.value)}/>
          <button className='search-submit-btn'>Search</button>
        </form>
        <div className='movies'>
          {movies && movies.map((movie, index) => <Movie key={index} movie={movie}/>)}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default SearchScreen