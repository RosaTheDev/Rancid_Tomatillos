import './App.css';
import React, {Component} from 'react'
import Main from '../Main/Main'
import Nav from '../Nav/Nav'
import movieData from '../testData/movieData.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: false,
    }
  }
  
    componentDidMount() {
     fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(movies => this.setState({movies}))
      .catch(() => this.setState({error: true}))
      console.log('I mounted 1st')
    }
  

  render() {
    return (
      <section >
        <Nav />
        <Main moviesProps={this.state.movies}/>
      </section>
    )
  }
}
export default App;
