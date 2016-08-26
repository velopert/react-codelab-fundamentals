import { combineReducers } from 'redux';

import counter from 'reducers/counter';
import uistate from 'reducers/uistate';

export default combineReducers({
    counter,
    uistate
});
