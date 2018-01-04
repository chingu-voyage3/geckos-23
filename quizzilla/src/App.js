import React, { Component } from 'react';
import Home from './components/Homepage/Home';
<<<<<<< HEAD

=======
>>>>>>> c0f1aebaae42434b6ca94385fbf8a533c8b0fe02
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
	   <Home />
	   <header className="App-header">
<<<<<<< HEAD
	    <Navbar navData={NavLinks} />
		 <h1 className="App-title">Welcome to Quizzilla</h1>
=======
	     <h1 className="App-title">Welcome to Quizzilla</h1>
>>>>>>> c0f1aebaae42434b6ca94385fbf8a533c8b0fe02
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		  </header>
      </div>
    );
  }
}

export default App;
