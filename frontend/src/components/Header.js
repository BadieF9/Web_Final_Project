import React, { useContext, useState } from 'react'
import MagnifyLogo from '../img/magnifying-glass-solid-light.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { GridListContext } from '../context/GridListContext'

const Header = () => {
  const [search, setSearch] = useState()
  const gridList = useContext(GridListContext)

  const navigate = useNavigate()
  const location = useLocation()
  
  const submitHandler = (e) => {
    e.preventDefault()
    const searchValue = document.querySelector('input.search-input').value
    navigate('/search', {state: searchValue})
  }

  const gridListChanger = (e) => {
    e.preventDefault()
    gridList.setGrid(!gridList.grid)
  }

  return (
    <header className={location.pathname === '/' ? 'header header-home' : 'header'}>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='new-movie'><li>New Movie</li></Link>
      </ul>
      {location.pathname === '/' && (
       <button className='btn-grid-list-changer' onClick={(e) => gridListChanger(e)}>{gridList.grid ? "Displyay List": "Display Grid" }</button>
      )}
      <form className='header-search-container' onSubmit={(e) => submitHandler(e)}>
        <img src={MagnifyLogo} className='search-logo'/>
        <input type="text" placeholder='Search...' className='search-input' onChange={(e) => setSearch(e.target.value)}/>
      </form>
    </header>
  )
}

export default Header