import ActionConstants from '../constants/actionsConstants';
import actions from '../actions';

const initialState = [];
export default (state = initialState, action) => {
    switch(action.type){
        case ActionConstants.SAVE_BASIC_DETAILS:
            return action.payload;
        default:
            return state;
    }
}

 