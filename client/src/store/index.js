import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger({ collapsed: true });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  // const store = createStore(rootReducer, applyMiddleware(thunk, logger));
  const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk, logger)));
  return store;
}



/*

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger({ collapsed: true });

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk, logger));
  return store;
}


 */
