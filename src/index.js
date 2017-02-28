import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import app from './components/app';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(app);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/app', () => {
        render(app)
    });
}