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
    }
  }
  
  //  componentDidMount() {
    //  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ ...this.state, movies: data.movies })
    //   })
    //   .catch(() => this.setState({...this.state, error: true}))
    //   console.log('I mounted 1st')
    // }
    
    displaySingleMovie = (id) => {
      const findMovie = this.state.movies.find(movie => movie.id === id);
      console.log(findMovie)
      this.setState({...this.state, movies: [findMovie]})
    }
    
   

  render() {
    return (
      <section >
        <Nav />
        <MovieContainer movies={this.state.movies} singleMovie={this.displaySingleMovie}/>
      </section>
    )
  }
}
export default App;
