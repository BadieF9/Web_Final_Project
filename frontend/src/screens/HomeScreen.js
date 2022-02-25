import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Movie from '../components/Movie'
import axios from 'axios'
import { GridListContext } from '../context/GridListContext'

const HomeScreen = () => {
  const [movies, setMovies] = useState()
  const gridList = useContext(GridListContext)

  useEffect(async () => {
    if(!movies) {
      const response = await axios.get('http://localhost:8000/movies')
      setMovies(response.data)
    }
  }, [movies, setMovies])

  return (
    <>
      <div className='container'>
        <Header/>
        <div className={gridList.grid ? 'movies' : 'movies-list'}>
          {movies && movies.map((movie, index) => <Movie key={index} movie={movie}/>)}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default HomeScreen