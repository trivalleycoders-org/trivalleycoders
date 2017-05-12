import { combineReducers } from 'redux';
// import { dissoc } from 'ramda';
import { merge } from 'ramda';
import * as ku from '../../../lib/ke-utils';

export const byId = ( state = {}, { type, payload }) => {
  ku.log('byId.type', type, 'green');
  ku.log('byId.payload', payload, 'blue');
  switch (type) {
    case 'app/replaceEvents':
      return payload.events;
    case 'app/replaceProjects':
      return payload.projects;
    default:
      return state;
  }
}

export const ids = (state = [], { type, payload }) => {
  ku.log('ids.type', type, 'red');
  ku.log('ids.payload', payload, 'red');
  switch (type) {
    case 'app/replaceEvents':
      return payload.ids;
    case 'app/replaceProjects':
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
  projects: combineReducers({
    byId,
    ids,
  }),
  requests,
})
