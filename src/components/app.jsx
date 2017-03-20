import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TestComponent from './testComponent';
import Home from './home';

import classNames from 'classnames/bind';
import Styles from './styles.scss';
const cx = classNames.bind(Styles);

const App = () => (
  <Router>
    <div className={cx('app')}>
      <Route exact path='/' component={Home} />
      <Route path='/hello' render={() => (<TestComponent hello='there'/>)} />
    </div>
  </Router>
)

export default App;
