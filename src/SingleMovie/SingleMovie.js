import React from 'react'
import './SingleMovie.css'
import MovieInfo from './MovieInfo/MovieInfo'


const SingleMovie = ({ movie }) => {

  const singleMovieCard = movie.map(movie => {
    console.log(movie);
    return (
      <MovieInfo
        key={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        avgRating={movie.average_rating}
        id={movie.id}
        overview={movie.overview}
        backdrop_path={movie.backdrop_path}
        release_date={movie.release_date}
        genres={movie.genres}
        budget={movie.budget}
        revenue={movie.revenue}
        runtime={movie.runtime}
        tagline={movie.tagline}
      />
    
    )
  })

  return (
    <section>
        {movie && singleMovieCard}
    </section>
  )
}

export default SingleMovie