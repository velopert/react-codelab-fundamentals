import React, { Component, PropTypes } from 'react';

const propTypes = {
    config: PropTypes.object,
    onSetDiff: PropTypes.func,
    onIncrease: PropTypes.func,
    onDecrease: PropTypes.func,
    onToggleVisibility: PropTypes.func
};

const defaultProps = {
    config: null,
    onSetDiff: () => console.error('onSetDiff not defined'),
    onIncrease: () => console.error('onIncrease not defined'),
    onDecrease: () => console.error('onDecrease not defined'),
    onToggleVisibility: () => console.error('oonToggleVisibility not defined')
};

class Controls extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tempDiff: 1
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if(isNaN(e.target.value)) // only accepts numbers and ''
            return;

        this.setState({
            tempDiff: e.target.value
        });

        // parse Integer from the string, set to 0 if empty.
        const value = (e.target.value === '') ? 0 : parseInt(e.target.value);
        this.props.onSetDiff(value);
    }

    render() {
        const options = (
            <span>
                <input type="text"
                    onChange={this.handleChange}
                    value={this.state.tempDiff}/>
                <button onClick={this.props.onIncrease}>+</button>
                <button onClick={this.props.onDecrease}>-</button>
            </span>
        );

        return(
            <div>
                {this.props.config.visibility ? options : undefined }
                <button onClick={this.props.onToggleVisibility}>HIDE</button>
            </div>
        );
    }
}

Controls.propTypes = propTypes;
Controls.defaultProps = defaultProps;

export default Controls;
