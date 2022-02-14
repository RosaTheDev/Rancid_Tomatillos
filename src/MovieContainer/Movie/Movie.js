import React from 'react';
import './Movie.css';
import { Route, Link } from 'react-router-dom';


const Movie = ({title, poster, avgRating, id}) => {

  return (
    <Link className='movie-link' to={`/${id}`}>
    <article  className='movie'>
      <div className='img-div'>
        <img className='movie-poster' src={poster} width={400} height={400} alt={`${title} showing in theateres`}/>
      </div>
      <h3>{title}</h3>
      <h3> Rating: {avgRating}</h3>
    </article>
    </Link>
  )
}
export default Movie;