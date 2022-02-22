import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Movie = ({movie}) => {
  const navigate = useNavigate()
  
  const moreDetails = (e) => {
    e.preventDefault()
    navigate('/movie', {state: movie})
  }

  return (
    <div className='movie-container'>
      <img src={movie.img_url || ''} alt='Image' className='movie-img'/>
      <div className='movie-footer'>
        <h3 className='movie-footer-name'>{movie.name || 'Not Availavle'}</h3>
        <p className='movie-footer-desc'>{movie.description.slice(0, 61) + (movie.description.length > 61 ? '...' : '') || 'Not Availavle'}</p>
      </div>
      <button className='movie-btn' onClick={(e) => moreDetails(e)}>More Details</button>
    </div>
  )
}

export default Movie