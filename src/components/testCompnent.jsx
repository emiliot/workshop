import React, {PropTypes} from 'react';

const TestComponent = ({hello}) => {
    return (
        <div><h1>Testing jsx {hello}</h1></div>
    )
}

TestComponent.propTypes = {
    hello: PropTypes.string.required
}

export default TestComponent