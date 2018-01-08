import React, { Component } from 'react';
import Home from './components/Homepage/Home';
import Header from './components/Homepage/Header';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
	       <Home />
	   <header>
	     <h1 className="App-title">Welcome to Quizzilla</h1>
        <p className="App-intro">
          
        </p>
		  </header>
      </div>
    );
  }
}

export default App;
