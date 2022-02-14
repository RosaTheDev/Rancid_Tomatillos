import React from 'react'
import logo from '../movie.png'
import './Nav.css'
import { NavLink } from 'react-router-dom';


const Nav = ({filterMovies}) => {

  return (
    <nav>
      <NavLink to={`/`}>
      <button className='logo-button'><img className='logo-img' src={logo} alt='Logo'/>Rancid Tomatillos</button>
      </NavLink>
      <div className="search">
        <div className="search-container">
          <div className="searchInputWrapper">
            <input onChange={e => filterMovies(e)} className="searchInput" type="text" placeholder='search movies'>
            </input>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav