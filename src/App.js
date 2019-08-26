import React from 'react';
import Login from './components/login/login'
import Grid from './components/grid/grid'

/** lib style */
import 'bootstrap/dist/css/bootstrap.css';

/** Css custom  */
import './style.css';

/** Control router */
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Route path='/' exact component={Login} />
            <Route path='/grid' exact component={Grid} />
        </Router>
    );
}

export default App;
