import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Movie from '../components/Movie'
import axios from 'axios'

const HomeScreen = () => {
  const [movies, setMovies] = useState()

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
        <div className='movies'>
          {movies && movies.map((movie, index) => <Movie key={index} movie={movie}/>)}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default HomeScreen