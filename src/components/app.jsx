import React from 'react';
import TestComponent from './testComponent';

import classNames from 'classnames/bind';
import Styles from './styles.scss';
const cx = classNames.bind(Styles)

const App = () => (
  <div className={cx('app')}>
    <h1>Hello, emilio</h1>
    <TestComponent hello='world'/>
  </div>
)

export default App;
