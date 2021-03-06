import React, { Component } from 'react'
import './SingleMovie.css'
import MovieInfo from './MovieInfo/MovieInfo'
import LolNotFound from '../ErrorNotFound/404NotFound';
import grabSingleMovieAPI from '../utilities/singleMovieApi';
import grabTrailerAPI from '../utilities/trailerAPI';
class  SingleMovie extends Component {
  constructor({id}) {
    super();
    this.state = {
      currentMovie: undefined,
      currentTrailer: null,
    };
    this.id = id;
  }
  componentDidMount() {
    grabSingleMovieAPI(this.id)
      .then(data => {
        console.log(data.movie.budget);
        let calculateBudget = !data.movie.budget ? 'No Budget' : Math.round(data.movie.budget).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        let calculateRevenue = !data.movie.revenue ? 'No Revenue' : Math.round(data.movie.revenue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        let cleanData = {
          ...data.movie,
          release_date: data.movie.release_date.split('-').reverse().join("/"),
          average_rating: data.movie.average_rating.toFixed(1),
          genres: data.movie.genres.join(", ").split(""),
          budget: calculateBudget,
          revenue: calculateRevenue
        }
        this.setState({ ...this.state, currentMovie: cleanData })
      })
      .catch(() => this.setState({ ...this.state, error: true }))

      grabTrailerAPI(this.id)
      .then(data => {
        let videoInfo = data.videos.map(video => {
          return `https://www.youtube.com/embed/${video.key}`
        })
        this.setState({...this.state, currentTrailer: videoInfo[0]})
      })
        .catch(() => this.setState({ ...this.state, error: true }))
  }

  
  
    singleMovieCard() { 
      return (
      <MovieInfo
        title={this.state.currentMovie.title}
        poster={this.state.currentMovie.poster_path}
        video={this.state.currentTrailer}
        avgRating={this.state.currentMovie.average_rating}
        id={this.state.currentMovie.id}
        overview={this.state.currentMovie.overview}
        backdrop_path={this.state.currentMovie.backdrop_path}
        release={this.state.currentMovie.release_date}
        genres={this.state.currentMovie.genres}
        revenue={this.state.currentMovie.revenue}
        runtime={this.state.currentMovie.runtime}
        tagline={this.state.currentMovie.tagline}
        budget={this.state.currentMovie.budget}
      />
    )
}

  render() {
    return (
      <div>
        {this.state.currentMovie ? this.singleMovieCard() : <LolNotFound />}
      </div>
    )
  } 
}




export default SingleMovie