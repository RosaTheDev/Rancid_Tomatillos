import React from 'react'
import logo from '../movie.png'
import './Nav.css'

const Nav = ({goHome}) => {
  return (
    <nav>
      <button onClick={() => goHome()} className='logo-button'><img className='logo-img' src={logo} alt='Logo'/>Rancid Tomatillos</button>
      <div className="nav-buttons">
        <button className="genre-button">Genres</button>
        <button className="top-rated-button">Top Rated</button>
        <button className="currently-playing-button">Currently Playing</button>
      </div>
    </nav>
  )
}

export default Nav