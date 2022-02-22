import React, { useState } from 'react'
import MagnifyLogo from '../img/magnifying-glass-solid-light.svg'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [search, setSearch] = useState()

  const navigate = useNavigate()
  
  const submitHandler = (e) => {
    e.preventDefault()
    const searchValue = document.querySelector('input.search-input').value
    navigate('/search', {state: searchValue})
  }

  return (
    <header className='header'>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='new-movie'><li>New Movie</li></Link>
      </ul>
      <form className='header-search-container' onSubmit={(e) => submitHandler(e)}>
        <img src={MagnifyLogo} className='search-logo'/>
        <input type="text" placeholder='Search...' className='search-input' onChange={(e) => setSearch(e.target.value)}/>
      </form>
    </header>
  )
}

export default Header