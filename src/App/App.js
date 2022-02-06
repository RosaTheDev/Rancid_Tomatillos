import './App.css';
import React, {Component} from 'react'
import MovieContainer from '../MovieContainer/MovieContainer'
import Nav from '../Nav/Nav'
import movieData from '../testData/movieData.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
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
    
    displaySingleMovie = (id) => {
      
      const findMovie = this.state.movies.find(movie => movie.id === id);
      console.log(findMovie)
      this.setState({...this.state, movies: [findMovie]})
    }
    
    goHome = () => {
      this.grabAPI()
    }

  render() {
    return (
      <section >
        <Nav goHome={this.goHome}/>
        <MovieContainer movies={this.state.movies} singleMovie={this.displaySingleMovie}/>
        {this.state.currentMovie && <SingleRecipe />} 
      </section>
    )
  }
}
export default App;
