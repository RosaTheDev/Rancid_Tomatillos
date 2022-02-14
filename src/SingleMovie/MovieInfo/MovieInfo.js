import React from  'react'
import './MovieInfo.css'




const MovieInfo = ({ title, poster, avgRating, overview, backdrop, release, genres, budget, revenue, runtim, tagline, video }) => {

  return (
    <article className="single-movie">
      <div className='poster-movie'>
        <div className='single-img-div'>
          <img className="single-movie-poster" src={poster} width={300} height={400} alt={`${title} showing in theaters`} />
        </div>
        <iframe className='movie-trailer' width="420" height="396" src={video} />
      </div>
      <div className='movie-specs'>
        <h3 className='single-movie-title'> {title}</h3>
        <h3 className='single-movie-overview'>{overview}</h3>
        <h3 className='single-movie-release'>Released on: {release}</h3>
        <h3 className='single-movie-genres'>Genres: {genres}</h3>
        <h3 className='single-movie-budget'>A budget of ${budget}</h3>
        <h3 className='single-movie-revenue'>A revenue of ${revenue}</h3>
        <h3 className='single-movie-rating'> Rating: {avgRating}</h3>
      </div>
    </article>
  )
}
export default MovieInfo;