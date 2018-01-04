import React, { Component } from 'react';
import Navbar from './components/Homepage/Navbar';
import Home from './components/Homepage/Home';
import quizilla from './components/img/quizzilla.png';
import './App.css';



  

class App extends Component {
  render() {
    return (
      <div className="App">
	   <Home />
	   <header className="App-header">
	     <h1 className="App-title">Welcome to Quizzilla</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		  </header>
      </div>
    );
  }
}

export default App;
