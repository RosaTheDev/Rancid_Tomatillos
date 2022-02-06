import React from 'react'
import './SingleMovie.css'


const SingleMovie = ({ movie }) => {

  const singleMovieCard = movie.map(movie => {
    return (
      <MovieInfo
        key={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        avgRating={movie.average_rating}
        id={movie.id}
        overView={movie.overview}
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
    <main>
      <h1 className="Category-title">Upcoming Movies</h1>
      <section className='movies-section'>
        {movies && singleMovieCard}
      </section>
    </main>
  )
}

export default SingleMovie