import './App.css';
import React, {Component} from 'react'
import Main from '../Main/Main'
import Nav from '../Nav/Nav'
import movieData from '../testData/movieData.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    }
  }

  render() {
    return (
      <section >
        <Nav />
        <Main />
      </section>
    )
  }
}
export default App;
