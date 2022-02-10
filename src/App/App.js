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
        // console.log(cleanData)
        this.setState({ ...this.state, movies: cleanData })
      })
      .catch(() => this.setState({ ...this.state, error: true }))
  }

  render() {
    return (
      <section >
        <Nav/>
        <Route exact path='/' render={() => <MovieContainer movies={this.state.movies} /> } />
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
