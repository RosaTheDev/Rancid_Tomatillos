import React from 'react'
import './Main.css'
import Movie from './Movie/Movie'

const Main = ({moviesProps}) => {
  // const  movies  = moviesProps
  console.log('main container', moviesProps.movies)
  // setTimeout(console.log(movies), 3000)
  
    const movieCards = moviesProps.movies.map(movie => {
      return (
      <Movie 
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
         {movieCards}
      </section>
    </main>
  )
}

export default Main