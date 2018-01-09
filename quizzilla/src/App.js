// Core
import React, { Component } from 'react';

// Instruments
import { auth } from './instruments/firebase';
import './App.css';

// Components
import Home from './components/Homepage/Home';
import SignIn from './components/SignIn';
import CurrentUser from './components/CurrentUser';

class App extends Component {

  state = {
    currentUser : null
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({currentUser});
    });
  }

  render() {
    const {currentUser} = this.state;

    return (
      <div className="App">
	   <Home />
	   <header className="App-header">
	    {/* <Navbar navData={NavLinks} /> */}
		 <h1 className="App-title">Welcome to Quizzilla</h1>
	     <h1 className="App-title">Welcome to Quizzilla</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		  </header>
      <div>
        {!currentUser && <SignIn />}
        {currentUser && <CurrentUser user={currentUser} />}
      </div>
      </div>
    );
  }
}

export default App;
