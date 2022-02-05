import React from 'react'
import './MovieContainer.css'
import Movie from './Movie/Movie'

const MovieContainer = ({movies}) => {
  
  console.log('main container', movies)
  
    const movieCards = movies.map(movie => {
      return (
      <Movie 
        key={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        avgRating={movie.average_rating}
        />
      )
    })
    
  return (
    <main>
      <h1 className="Category-title">Upcoming Movies</h1>
      <section className='movies-section'>
        {/* {!movies && <h1>Loading...</h1>} */}
        {/* <h1>Loading...</h1> */}
        {movies && movieCards}
      </section>
    </main>
  )
}

export default MovieContainer