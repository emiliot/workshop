import React, {Component} from 'react';
import TestComponent from './testCompnent';
import styles from './styles.css';

const App = () => (
    <div className='app'>
        <h1>Hello, emilio 123</h1>
        <TestComponent hello='world'/>
    </div>
)

export default App;