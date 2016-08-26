/* jshint ignore: start */

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

export default function reducer(state, action) {
    if(typeof state === 'undefined') {
        state = initialState;
    }

    switch(action.type) {
        case types.TOGGLE_CONTROL_VISIBILITY:
            return {
                ...state,
                uistate: {
                    visibiliy: !state.uistate.visibility
                }
            };
        case types.SET_DIFF:
            return {
                ...state,
                counter: {
                    ...state.counter,
                    diff: action.diff
                }
            };
        case types.INCREASE:
            return {
                ...state,
                counter: {
                    ...state.counter,
                    value: state.counter.value + state.counter.diff
                }
            };
        case types.DECREASE:
            return {
                ...state,
                counter: {
                    ...state.counter,
                    value: state.counter.value - state.counter.diff
                }
            };
        default:
            return state;
    }
}
