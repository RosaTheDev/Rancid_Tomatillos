import React from 'react'
import logo from '../movie.png'
import './Nav.css'
import { Route, NavLink } from 'react-router-dom';
const Nav = ({goHome}) => {
  return (
  <NavLink to={`/`}>
    <nav>
      <button onClick={() => goHome()} className='logo-button'><img className='logo-img' src={logo} alt='Logo'/>Rancid Tomatillos</button>
      <div className="nav-buttons">
        <button className="genre-button">Genres</button>
        <button className="top-rated-button">Top Rated</button>
        <button className="currently-playing-button">Currently Playing</button>
      </div>
    </nav>
  </NavLink>
  )
}

export default Nav