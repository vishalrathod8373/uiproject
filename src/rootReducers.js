import { combineReducers } from 'redux';
import addDetailsReducer from './pages/fillForm/reducer';

const rootReducer = combineReducers({
    addDetailsReducer: addDetailsReducer,
});

export default rootReducer;