import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GridListContext } from '../context/GridListContext'

const Movie = ({movie}) => {
  const navigate = useNavigate()
  const gridList = useContext(GridListContext)
  
  const moreDetails = (e) => {
    e.preventDefault()
    navigate('/movie', {state: movie})
  }

  return (
    <div className='movie-container'>
      <img src={movie.img_url || ''} alt='Image' className='movie-img'/>
      <div className='movie-footer'>
        <h3 className='movie-footer-name'>{!gridList.grid ? 'Title: ' : ''}{movie.name || 'Not Availavle'}</h3>
        <p className='movie-footer-desc'>{!gridList.grid ? 'Description: ' : ''}{movie.description.slice(0, 61) + (movie.description.length > 61 ? '...' : '') || 'Not Availavle'}</p>
      </div>
      <button className='movie-btn' onClick={(e) => moreDetails(e)}>More Details</button>
    </div>
  )
}

export default Movie