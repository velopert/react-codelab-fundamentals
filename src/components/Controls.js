import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class Controls extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            diff: props.diff
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            diff: e.target.value
        });
        this.props.handleDiffUpdate(parseInt(e.target.value));
    }

    render() {
        return (
            <div>
                { this.props.visibility ? (
                    <span>
                        <input type="text" value={this.state.diff} onChange={this.handleChange}/>
                        <button onClick={this.props.handleIncrease}>+</button>
                        <button onClick={this.props.handleDecrease}>-</button>
                    </span>
                ) : null }
                <button onClick={this.props.handleToggleVisibliity}>HIDE</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        diff: state.counter.diff,
        visibility: state.uistate.visibility
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleDiffUpdate: (diff) => dispatch(actions.setDiff(diff)),
        handleIncrease: () => dispatch(actions.increase()),
        handleDecrease: () => dispatch(actions.decrease()),
        handleToggleVisibliity: () => dispatch(actions.toggleControlVisibility())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
