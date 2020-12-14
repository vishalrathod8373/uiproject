import { ADD_NAME, ADD_MOBILE_NUMBER } from '../../../actionTypes';

const initialState = {
    name: '',
    mobileNumber: ''
}
const addDetailsReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_NAME:
            return Object.assign({}, state, { name: action.payload });
        case ADD_MOBILE_NUMBER:
            return Object.assign({}, state, { mobileNumber: action.payload });
        default: return state
    }
};

export default addDetailsReducer;