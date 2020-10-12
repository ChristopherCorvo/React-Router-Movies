import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // need to add in order to utilize Router

import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work --Done--
ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root')
);
