import React from 'react';
import './Movie.css';

const Movie = ({title, poster, avgRating}) => {

  return (
    <article className='movie'>
      <img src={poster} width={400} height={400} />
      <h3>{title}</h3>
      <h3> Rating: { Math.round(avgRating * 100) / 100}</h3>
    </article>
  )
}
export default Movie;