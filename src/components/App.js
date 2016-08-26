import React from 'react';
import Counter from './Counter';
import Controls from './Controls';

import * as actions from 'actions';

import { connect } from 'react-redux';

class App extends React.Component {
    render(){
        return (
                <div>
                    <Counter value={this.props.value}/>
                    <Controls
                        config={this.props.config}
                        onSetDiff={this.props.onSetDiff}
                        onIncrease={this.props.onIncrease}
                        onDecrease={this.props.onDecrease}
                        onToggleVisibility={this.props.onToggleVisibility}
                    />
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.counter.value,
        config: {
            diff: state.counter.diff,
            visibility: state.uistate.visibility
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetDiff: (value) => dispatch(actions.setDiff(value)),
        onIncrease: () => dispatch(actions.increase()),
        onDecrease: () => dispatch(actions.decrease()),
        onToggleVisibility: () => dispatch(actions.toggleControlVisibility())
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
