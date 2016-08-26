import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class Controls extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <input type="text"/>
                <button>+</button>
                <button>-</button>
                <button>HIDE</button>
            </div>
        );
    }
}

Controls.propTypes = propTypes;
Controls.defaultProps = defaultProps;

export default Controls;
