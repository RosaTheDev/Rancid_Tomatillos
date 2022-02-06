import React from  'react'
import './MovieInfo.css'




const MovieInfo = ({ title, poster, avgRating, id, overview, backdrop, release, genres, budget, revenue, runtim, tagline }) => {

  return (
    <article className="single-movie">
      <img src={poster} width={400} height={400} />
      <h3 className='single-movie-title'>{title}</h3>
      <h3 className='single-movie-rating'> Rating: {Math.round(avgRating * 100) / 100}</h3>
      <h3 className='single-movie-overview'>{overview}</h3>
    


    </article>
  )
}
export default MovieInfo;