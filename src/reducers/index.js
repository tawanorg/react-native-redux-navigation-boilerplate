 
import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import AppNavigator from "../router";

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

const rootReducer = combineReducers({
	app: AppReducer,
	nav: navReducer
});

export default rootReducer;
