import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter  as Router, Route , Switch } from 'react-router-dom';


const Routes =(
    <Router>
       <App/>    
    </Router>
    );


ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
