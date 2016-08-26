/* jshint ignore: start */
import * as types from 'actions/ActionTypes';

const initialState = {
    value: 0,
    diff: 1
};

export default function counter(state = initialState, action) {
    switch(action.type) {
        case types.SET_DIFF:
            return {
                ...state,
                diff: action.diff
            };
        case types.INCREASE:
            return {
                ...state,
                value: state.value + state.diff
            };
        case types.DECREASE:
            return {
                ...state,
                value: state.value - state.diff
            };
        default:
            return state;
    }
}
