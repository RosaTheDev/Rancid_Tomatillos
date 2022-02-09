import React from 'react';
import './Movie.css';
import { Route, NavLink } from 'react-router-dom';


const Movie = ({title, poster, avgRating, id}) => {

  return (
    <NavLink to={`/${id}`}>
    <article  className='movie'>
      <img src={poster} width={400} height={400} alt={`${title} showing in theateres`}/>
      <h3>{title}</h3>
      <h3> Rating: {avgRating.toFixed(1)}</h3>
    </article>
    </NavLink>
  )
}
export default Movie;