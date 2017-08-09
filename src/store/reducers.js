import { combineReducers } from 'redux';
import { merge } from 'ramda';
// import * as ku from '../lib/ke-utils';

export const eventsById = ( state = {}, { type, payload }) => {
  switch (type) {
    case 'app/replaceEvents':
      // ku.log('eventsById.payload', payload, 'green');
      return payload.events;
    default:
      return state;
  }
}

export const eventsIds = (state = [], { type, payload }) => {
  switch (type) {
    case 'app/replaceEvents':
      // ku.log('eventsIds.payload', payload, 'green');
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
    eventsById,
    eventsIds,
  }),
  requests,
})
