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
          // refactor this withought array
            this.setState({ ...this.state, currentMovie: [data.movie] })
        })
        .catch(() => this.setState({ ...this.state, error: true }))
    }

    goHome = () => {
      this.grabAPI()
      this.setState({ ...this.state, currentMovie: null })
    }

  render() {
    return (
      <section >
        <Nav goHome={this.goHome}/>
        <Route exact path='/' render={() => <MovieContainer movies={this.state.movies} /> } />
        <Route exact path='/:id' render={({match}) => {
          console.log(typeof match.params.id)

          const findMovie = this.state.movies.find((movie) => movie.id === parseInt(match.params.id))
          if(findMovie) {
            return (
              <SingleMovie movie={[findMovie]} />
              )
          }
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
