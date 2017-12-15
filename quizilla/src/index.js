import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Home} from './component/home/Home';
import {LandingPage} from './component/landingPage/LandingPage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter  as Router, Route  } from 'react-router-dom';


const Routes =(
        <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route component={LandingPage}/>
                <Route path="/home" component={Home}/>
           </div>    
        </Router>
    );


ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
