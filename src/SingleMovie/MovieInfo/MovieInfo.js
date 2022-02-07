import React from  'react'
import './MovieInfo.css'




const MovieInfo = ({ title, poster, avgRating, id, overview, backdrop, release, genres, budget, revenue, runtim, tagline }) => {

  return (
    <article className="single-movie">
      <img className="movie-poster" src={poster} width={300} height={400} />
      <div className='movie-specs'>
        <h3 className='single-movie-rating'> {title}</h3>
        <h3 className='single-movie-overview'>{overview}</h3>
        <h3 className='single-movie-rating'> Rating: {Math.round(avgRating * 100) / 100}</h3>
      </div>

    


    </article>
  )
}
export default MovieInfo;