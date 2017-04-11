import * as AppTypes from '../actions/AppAction.js';
import initialState from './initialState';

export default function AppReducer(state = initialState, action = {}) {
	switch (action.type) {
		case [AppTypes.REQUEST]:
		return {
			isLoading: true,
		}
	  	default:
	  	return state;
  	}
}
