import { TOGGLE_CONTROL_VISIBILITY } from 'actions/ActionTypes';

export default function(state, action) {
    if(typeof state === 'undefined') {
        state = {
            visibility: true
        };
    }

    switch(action.type) {
        case TOGGLE_CONTROL_VISIBILITY:
            return Object.assign({}, state, {
                visibility: !state.visibility
            });
        default:
            return state;
    }
}
