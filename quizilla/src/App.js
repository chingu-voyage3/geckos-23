import React, { Component } from 'react';
import Navbar from './Navbar';
import body from './body';
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
      <body />
      </div>
    );
  }
}

export default App;
