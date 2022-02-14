import React from  'react';
import './MovieInfo.css';
import NoVideoRendering from '../../ErrorNotFound/NoVideoRendering'


const MovieInfo = ({ title, poster, avgRating, overview, backdrop, release, genres, budget, revenue, runtim, tagline, video }) => {

  console.log(video)

  return (
    <article className="single-movie">
      <img className="single-movie-poster" src={poster} width={300} height={400} alt={`title showing in theaters`}/>
      {!video ? <NoVideoRendering /> : <iframe className='movie-trailer' src={video} title={title} />}
      <div className='movie-specs'>
        <h3 className='single-movie-title'>Title: {title}</h3>
        <h3 className='single-movie-overview'>About: {overview}</h3>
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