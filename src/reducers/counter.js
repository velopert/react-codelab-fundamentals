import * as types from 'actions/ActionTypes';

const initialState = {
    value: 0,
    diff: 1
};

export default function(state, action) {
    if(typeof state === 'undefined') {
        state = initialState;
    }

    switch(action.type) {
        case types.SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        case types.INCREASE:
            console.log(JSON.stringify(state));
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case types.DECREASE:
            return Object.assign({}, state, {
                value: state.value - state.diff,
            });
        default:
            return state;
    }
}
