import React from  'react'
import './MovieInfo.css'
import MovieSpecCard from './MovieSpecCard/MovieSpecCard'



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
          <MovieSpecCard specs={title} title={'title'} />
        <MovieSpecCard specs={avgRating} title={'rating'} />
          <MovieSpecCard specs={overview} title={'overview'} />
          <MovieSpecCard specs={release} title={'release'} />
          <MovieSpecCard specs={genres} title={'genre'} />
          <MovieSpecCard specs={budget} title={'budget'} />
          <MovieSpecCard specs={revenue} title={'revenue'} />
      </div>
    </article>
  )
}
export default MovieInfo;