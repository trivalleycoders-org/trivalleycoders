import { combineReducers } from 'redux';
// import { dissoc } from 'ramda';
import { merge } from 'ramda';
import * as ku from '../../../lib/ke-utils';

export const eventsById = ( state = {}, { type, payload }) => {
  // ku.log('byId.type', type, 'green');

  switch (type) {
    case 'app/replaceEvents':
      ku.log('events.byId.payload', payload, 'green');
      return payload.events;
    default:
      return state;
  }
}

export const eventsIds = (state = [], { type, payload }) => {
  // ku.log('ids.type', type, 'green');

  switch (type) {
    case 'app/replaceEvents':
      ku.log('events.ids.payload', payload, 'green');
      return payload.ids;
    default:
      return state;
  }
};

export const projectsById = ( state = {}, { type, payload }) => {
  // ku.log('byId.type', type, 'green');
  switch (type) {
    case 'app/replaceProjects':
      ku.log('projects.byId.payload', payload, 'green');
      return payload.projects;
    default:
      return state;
  }
}

export const projectsIds = (state = [], { type, payload }) => {
  // ku.log('ids.type', type, 'green');

  switch (type) {
    case 'app/replaceProjects':
      ku.log('projects.ids.payload', payload, 'green');
      return payload.ids;
    default:
      return state;
  }
};

export const membersById = ( state = {}, { type, payload }) => {
  // ku.log('byId.type', type, 'green');
  switch (type) {
    case 'app/replaceMembers':
      ku.log('members.byId.payload', payload, 'green');
      return payload.members;
    default:
      return state;
  }
}

export const membersIds = (state = [], { type, payload }) => {
  // ku.log('ids.type', type, 'green');

  switch (type) {
    case 'app/replaceMembers':
      ku.log('members.ids.payload', payload, 'green');
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
  projects: combineReducers({
    projectsById,
    projectsIds,
  }),
  members: combineReducers({
    membersById,
    membersIds,
  }),
  requests,
})
