import './App.css';
import React, {Component} from 'react'
import MovieContainer from '../MovieContainer/MovieContainer'
import Nav from '../Nav/Nav'
import SingleMovie from '../SingleMovie/SingleMovie'
import { Route } from 'react-router-dom'
import grabAPI from '../utilities/moviesApi';
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: false,
      filteredMovies: []
    }
  }

  componentDidMount() {
    grabAPI()
      .then(data => {
        let cleanData = data.movies.map(movie=> {
          return {
            ...movie, 
            average_rating: movie.average_rating.toFixed(1)
          }
        })
        this.setState({ ...this.state, movies: cleanData, filteredMovies: cleanData })

      })
      .catch(() => this.setState({ ...this.state, error: true }))
  }

  newFilteredMovies = (e) => {
    const filteredMovies = this.state.movies.filter((movie) => {
      if (movie.title.toLowerCase().includes(e.target.value)) {
        return movie
      }
    })

    this.setState({ ...this.state, filteredMovies: filteredMovies})
  }


  render() {
    return (
      <section >
        <Nav filterMovies={this.newFilteredMovies}/>
        <Route exact path='/' render={() => <MovieContainer movies={this.state.filteredMovies} /> } />
        <Route exact path='/:id' render={({match}) => {
          const findMovie = this.state.movies.find((movie) => movie.id === parseInt(match.params.id))
          if(findMovie) {
            return (
              <SingleMovie id={match.params.id}/>
              )
          }
        }}
        />
      </section>
    )
  }
}
export default App;
