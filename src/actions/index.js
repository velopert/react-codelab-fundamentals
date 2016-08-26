import * as types from './ActionTypes';

export function toggleControlVisibility() {
    return {
        type: types.TOGGLE_CONTROL_VISIBILITY
    };
}

export function setDiff(value) {
    return {
        type: types.SET_DIFF,
        diff: value
    };
}

export function increase() {
    return {
        type: types.INCREASE
    };
}

export function decrease() {
    return {
        type: types.DECREASE
    };
}
