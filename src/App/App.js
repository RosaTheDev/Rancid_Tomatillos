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
  
   componentDidMount() {
    //  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ ...this.state, movies: data.movies })
    //   })
    //   .catch(() => this.setState({...this.state, error: true}))
    //   console.log('I mounted 1st')
    }
    
    
  render() {
    return (
      <section >
        <Nav />
        <MovieContainer movies={this.state.movies}/>
      </section>
    )
  }
}
export default App;
