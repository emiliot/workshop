import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Hello from './components/Hello';
import Home from './components/Home';

const Routes = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/hello' render={() => (<Hello hello='there'/>)} />
    </div>
  </Router>
)

export default Routes;
