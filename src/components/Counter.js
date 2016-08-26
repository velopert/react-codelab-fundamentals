import React, { Component, PropTypes } from 'react';

const propTypes = {
    value: PropTypes.number
};

const defaultProps = {
    value: 0
};

class Counter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <h1>{this.props.value}</h1>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
