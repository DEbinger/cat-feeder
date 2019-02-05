import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
//import Navbar from './components/navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            click here to stuff my feline
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br/>
          <Navbar/>
          <h1 className = "buttons">
          <Button/>
          </h1>

        </header>
      </div>

    );
  }
}

export default App;
