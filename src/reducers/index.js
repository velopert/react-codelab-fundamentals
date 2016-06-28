import * as types from 'actions/ActionTypes';

const initialState = {
    uistate: {
        visibility: true
    },
    counter: {
        value: 0,
        diff: 1
    }
};

export default function counterApp(state, action) {
    if(typeof state === 'undefined') {
        state = initialState;
    }

    switch(action.type) {
        case types.TOGGLE_CONTROL_VISIBILITY:
            return Object.assign({}, state, {
                uistate: {
                    visibility: !state.uistate.visibility
                }
            });
        case types.SET_DIFF:
            return Object.assign({}, state, {
                counter: {
                    diff: action.diff
                }
            });
        case types.INCREASE:
            return Object.assign({}, state, {
                counter: {
                    value: state.counter.value + state.counter.diff
                }
            });
        case types.DECREASE:
            return Object.assign({}, state, {
                counter: {
                    value: state.counter.value - state.counter.diff
                }
            });
        default:
            return state;
    }
}
