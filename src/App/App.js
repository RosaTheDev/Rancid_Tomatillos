import './App.css';
import React, {Component} from 'react'
import MovieContainer from '../MovieContainer/MovieContainer'
import Nav from '../Nav/Nav'
import SingleMovie from '../SingleMovie/SingleMovie'
import { Route } from 'react-router-dom'
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: false,
      currentMovie: null
    }
  }

    grabAPI() {
      fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
        .then(response => response.json())
        .then(data => {
          this.setState({ ...this.state, movies: data.movies })
        })
        .catch(() => this.setState({ ...this.state, error: true }))
    }

  componentDidMount() {
    this.grabAPI()
  }
    
    grabSingleMovie = (id) => {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => response.json())
        .then(data => {
            this.setState({ ...this.state, currentMovie: [data.movie] })
        })
        .catch(() => this.setState({ ...this.state, error: true }))
    }

    displaySingleMovie = (id) => {
      this.grabSingleMovie(id)
      this.setState({ ...this.state, movies: [] })
      console.log('movie', this.state.currentMovie);
    }

    goHome = () => {
      this.grabAPI()
      this.setState({ ...this.state, currentMovie: null })
    }

  render() {
    return (
      <section >
        <Nav goHome={this.goHome}/>
        <Route path='/' render={() => <MovieContainer movies={this.state.movies} singleMovie={this.displaySingleMovie} /> } />
        <Route path='/movies' render={() => <MovieContainer movies={this.state.movies} singleMovie={this.displaySingleMovie} />} />

        <Route  path='/movies/:id' render={({match}) => {
          const movieToRender = this.state.movies.find(movie => movie.id === parseInt(match.params.id));
          return<SingleMovie movie={movieToRender}/>
        }} 
        />
        {/* {!this.state.currentMovie ? 
          <MovieContainer movies={this.state.movies} singleMovie={this.displaySingleMovie} /> 
          : <SingleMovie movie={this.state.currentMovie} />} */}
      </section>
    )
  }
}
export default App;
