import { combineReducers } from 'redux';
// import { dissoc } from 'ramda';
import { merge } from 'ramda';

export const byId = ( state = {}, { type, payload }) => {
  console.log('type', type);
  console.log('payload', payload);
  switch (type) {
    case 'app/replaceEvents':
      return payload.events;
    default:
      return state;
  }
}

export const ids = (state = [], { type, payload }) => {
  switch (type) {
    case 'app/replaceEvents':
      return payload.ids;
    default:
      return state;
  }
};

export const requests = (state = {}, { type, payload, meta }) => {
  switch (type) {
    case 'app/markRequestPending':
      return merge(state, { [meta.key]: { status: 'pending', error: null } });
    case 'app/markRequestSuccess':
      return merge(state, { [meta.key]: { status: 'success', error: null } });
    case 'app/markRequestFailed':
      return merge(state, { [meta.key]: { status: 'failure', error: payload } });
    default:
      return state;
  }
};

export default combineReducers({
  events: combineReducers({
    byId,
    ids,
  }),
  requests,
})
