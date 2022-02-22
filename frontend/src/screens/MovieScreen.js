import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const MovieScreen = () => {
  const location = useLocation()
  useEffect(() => {
    console.log(location)
  }, [])
  return (
    <>
      <Header/>
      <div className='container'>
        <div className='movie'>
          <img src={location.state.img_url} className='movie-img' alt={location.state.name}/>
          <div className='movie-desc-container'>
            <h3 className='movie-title'><span className='text-primary'>Title: </span>{location.state.name || 'hello world'}</h3>
            <p className='movie-released-year'><span className='text-primary'>Released year: </span>{location.state.year || '2017'}</p>
            <p className='movie-desc'><span className='text-primary'>Description: </span>{location.state.description || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae accusantium nesciunt quas adipisci quis nihil labore cupiditate iste commodi. Officiis, similique, voluptatum deleniti aspernatur laboriosam quas nobis explicabo, rem unde eum ullam dicta sequi eius quidem numquam sint. Itaque, recusandae accusamus? Qui ipsum alias dicta neque ducimus fugiat officia possimus?'}</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default MovieScreen