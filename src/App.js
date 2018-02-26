import React, { Component } from 'react';
import './App.css';

import Nav from './Components/Nav/Nav'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
    this.toggleHam = this.toggleHam.bind(this)
  }
  toggleHam() {
    this.setState({active: !this.state.active})

  }

  render() {

    return (
      <div className="App">
       <Nav active={this.state.active} toggleHam={this.toggleHam}/>
      </div>
    );
  }
}

export default App;
