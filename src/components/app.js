import React, {Component} from 'react';
import TestComponent from './testCompnent';
import styles from './styles.css';

class App extends Component {
    render () {
        return (
            <div className="app-blue">
                <h1>Hello, emilio</h1>
                <TestComponent hello='world' />
            </div>
        )
    }
}

export default App;