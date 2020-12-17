import { combineReducers } from 'redux';
import addDetailsReducer from './pages/fillForm/reducer';
import cartReducer from "./pages/shopping/cart/cartReducer";

const rootReducer = combineReducers({
    addDetailsReducer: addDetailsReducer,
    cartReducer: cartReducer
});

export default rootReducer;