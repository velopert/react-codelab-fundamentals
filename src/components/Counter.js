import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h1>{ JSON.stringify(this.props.value) }</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
};

export default connect(mapStateToProps)(Counter);
