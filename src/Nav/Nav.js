import React from 'react'
import logo from '../movie.png'
import './Nav.css'
import { Route, NavLink } from 'react-router-dom';
import {useState} from 'react'


const Nav = ({filterMovies}) => {

  return (
    <nav>
      <NavLink className='logo-button-link' to={`/`}>
      <button className='logo-button'><img className='logo-img' src={logo} alt='Logo'/></button>
      </NavLink>
      <p>Rancid Tomatillos</p>
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