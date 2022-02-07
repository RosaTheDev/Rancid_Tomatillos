import React from 'react';
import './Movie.css';

const Movie = ({title, poster, avgRating, id, singleMovie}) => {

  return (
    <article onClick={() => singleMovie(id)}  className='movie'>
      <img src={poster} width={400} height={400} alt={`${title} showing in theateres`}/>
      <h3>{title}</h3>
      <h3> Rating: {avgRating.toFixed(1)}</h3>
    </article>
  )
}
export default Movie;