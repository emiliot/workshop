import React from 'react';
import TestComponent from './testCompnent';
import Styles from './styles.css';

const App = () => (
    <div className={Styles.app}>
        <h1>Hello, emilio</h1>
        <TestComponent hello='world'/>
    </div>
)

export default App;