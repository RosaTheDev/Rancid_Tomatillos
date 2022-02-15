
import React from  'react'
import './MovieInfo.css'
import MovieSpecCard from './MovieSpecCard/MovieSpecCard'
import SecondSpecCard from './MovieSpecCard/SecondSpecCard'



const MovieInfo = ({ title, poster, avgRating, overview, backdrop, release, genres, budget, revenue, runtime, tagline, video }) => {
  return (
    <article className="single-movie">
      <div className='poster-movie'>
        <div className='single-img-div'>
          <img className="single-movie-poster" src={poster} width={300} height={400} alt={`${title} showing in theaters`} />
        </div>
        <iframe className='movie-trailer' src={video} />
      </div>
      <div className='movie-specs'>
        <MovieSpecCard rating={avgRating} release={release} genres={genres} revenue={revenue} runtime={runtime} tagline={tagline} budget={budget}/>
        <SecondSpecCard overview={overview} title={title}/>
      </div>
    </article>
  )
}
export default MovieInfo;