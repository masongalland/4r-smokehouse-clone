import React, { Component } from 'react';
import './App.css';

import Nav from './Components/Nav/Nav'
import DropDown from './Components/Nav/DropDown'
import Menu from './Components/Menu/Menu'


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
       <DropDown active={this.state.active}/>
       <Menu />
      </div>
    );
  }
}

export default App;
