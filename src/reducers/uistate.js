import { TOGGLE_CONTROL_VISIBILITY } from 'actions/ActionTypes';

const initialState = {
    visibility: true
};

export default function uistate(state, action) {
    if(typeof state === 'undefined') {
        state = initialState;
    }

    switch(action.type) {
        case TOGGLE_CONTROL_VISIBILITY:
            return {
                visibility: !state.visibility
            };
        default:
            return state;
    }
}
