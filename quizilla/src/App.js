import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Home} from './component/home/Home';
import {LandingPage} from './component/landingPage/LandingPage';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>APP</h1>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/home"  exact component={Home}/>
        <Route path="/home/:id" component={Home}/>        
      </div> 
    );
  }
}

export default App;
