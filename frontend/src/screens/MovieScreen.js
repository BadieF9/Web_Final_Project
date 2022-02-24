import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation, useNavigate } from 'react-router-dom'

const MovieScreen = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(location)
  }, [])
  
  const editHandler = (e) => {
    e.preventDefault()
    navigate('../new-movie', {state: location.state})
  }

  const deleteHandler = async (e) => {
    e.preventDefault()
    const request = await fetch("http://localhost:8000/", {
      method: "DELETE",
      body: {
        id : location.state.id
      }
    })
    const response = await request

  }

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
          <div className='btn-container'>
            <button className='btn edit-btn' onClick={(e) => editHandler(e)}>Edit</button>
            <button className='btn delete-btn' onClick={(e) => deleteHandler(e)}>Delete</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default MovieScreen