import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';

var NavLinks = [
  {
    title:'Home',
    href:'#'
  },
  {
    title:'About',
    href:'#'
  },
  {
    title : 'Login/SignUp',
    href:'#'
  },
  {
    title: 'Contact Us',
    href:'#'
  }
  ];
  
class App extends Component {
    
  render(){
    return (
      <div className="App">
      <Navbar navData={NavLinks} />
	  <div className="jumbotron">
      <Home />
	  </div>
      </div>
    );
  }
}

export default App;
