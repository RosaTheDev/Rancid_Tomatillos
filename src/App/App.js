import './App.css';
import React, {Component} from 'react'
import Main from '../Main/Main.js'
import Nav from '../Nav/Nav.js'
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
      <body>
        <Nav />
        <Main /> 
      </body>
    )
  }
}
export default App;
