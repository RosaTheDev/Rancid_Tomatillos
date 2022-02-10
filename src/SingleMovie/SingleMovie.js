import React, { Component } from 'react'
import './SingleMovie.css'
import MovieInfo from './MovieInfo/MovieInfo'
import { Route, NavLink } from 'react-router-dom';
import App from '../App/App'
import grabSingleMovieAPI from '../utilities/singleMovieApi';

class  SingleMovie extends Component {
  constructor({id}) {
    super();
    this.state = {
      currentMovie: null
    };
    this.id = id;
  }
  componentDidMount() {
    grabSingleMovieAPI(this.id)
      .then(data => {
        // console.log(data.movie)
        let cleanData = {
          ...data.movie,
          release_date: data.movie.release_date.split('-').reverse().join("/"),
          average_rating: data.movie.average_rating.toFixed(1),
          genres: data.movie.genres.join(", ").split(""),
          budget: Math.round(data.movie.budget).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          revenue: Math.round(data.movie.revenue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        }
        console.log(cleanData)
        this.setState({ ...this.state, currentMovie: cleanData })
      })
      .catch(() => this.setState({ ...this.state, error: true }))

  }

  
  
    singleMovieCard() { 
      return (
      <MovieInfo
        title={this.state.currentMovie.title}
        poster={this.state.currentMovie.poster_path}
        avgRating={this.state.currentMovie.average_rating}
        id={this.state.currentMovie.id}
        overview={this.state.currentMovie.overview}
        backdrop_path={this.state.currentMovie.backdrop_path}
        release={this.state.currentMovie.release_date}
        genres={this.state.currentMovie.genres}
        budget={this.state.currentMovie.budget}
        revenue={this.state.currentMovie.revenue}
        runtime={this.state.currentMovie.runtime}
        tagline={this.state.currentMovie.tagline}
      />
    )
}

  render() {
    return (
      <div>
        {this.state.currentMovie && this.singleMovieCard()}
      </div>
    )
  } 
}




export default SingleMovie