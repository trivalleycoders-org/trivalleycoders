import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// const logger = createLogger({ collapsed: true });

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
