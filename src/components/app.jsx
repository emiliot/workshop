import React from 'react';
import TestComponent from './testComponent';
import Styles from './styles.scss';

const App = () => (
  <div className={Styles.app}>
    <h1>Hello, emilio</h1>
    <TestComponent hello='world'/>
  </div>
)

export default App;
