import React, { Component } from 'react'
import './SingleMovie.css'
import MovieInfo from './MovieInfo/MovieInfo'
import { Route, NavLink } from 'react-router-dom';
import App from './App/App'



class  SingleMovie extends Component {
  constructor() {
    super()
    this.state;
  }
    singleMovieCard() { 
    let result = movie.map(movie => {
    return (
      <MovieInfo
        key={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        avgRating={movie.average_rating}
        id={movie.id}
        // overview={movie.overview}
        // backdrop_path={movie.backdrop_path}
        // release_date={movie.release_date}
        // genres={movie.genres}
        // budget={movie.budget}
        // revenue={movie.revenue}
        // runtime={movie.runtime}
        // tagline={movie.tagline}
      />
    )
  })
}

  render() {
    return (
      <div>
        {movie && singleMovieCard}
      </div>
    )
  } 
}



export default SingleMovie