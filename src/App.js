import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Container from './Components/Container';
import OtherProducts from './Components/OtherProducts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container />
        <OtherProducts />
      </div>
    );
  }
}

export default App;
