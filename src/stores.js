import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';

let middleware = [thunk];
if (__DEV__) {
  const logger = createLogger();
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );
}
