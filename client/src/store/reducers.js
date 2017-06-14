import { combineReducers } from 'redux';
// import { merge, prepend, dissoc, without } from 'ramda';
import { merge, prepend, dissoc } from 'ramda';
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

export const navButtonsById = ( state = {}, { type, payload }) => {
  switch (type) {
    case 'app/replaceNavButtons':
      // ku.log('navButtonsById.payload', payload, 'green');
      return payload.navButtons;
    default:
      return state;
  }
}

export const navButtonsIds = (state = [], { type, payload }) => {
  switch (type) {
    case 'app/replaceNavButtons':
      // ku.log('navButtonsIds.payload', payload, 'green');
      return payload.ids;
    default:
      return state;
  }
};

export const projectsById = ( state = {}, { type, payload }) => {
  switch (type) {
    case 'app/replaceProjects':
      // ku.log('projectsById.payload', payload, 'green');
      return payload.projects;
    default:
      return state;
  }
}

export const projectsIds = (state = [], { type, payload }) => {
  switch (type) {
    case 'app/replaceProjects':
      // ku.log('projectsIds.payload', payload, 'green');
      return payload.ids;
    default:
      return state;
  }
};

export const membersById = ( state = {}, { type, payload }) => {
  try {
    switch (type) {
      case 'app/updateMember':
      case 'app/insertMember': // new/add & update
        return merge(state, { [payload._id]: payload });
      case 'app/replaceMembers': // read list load all
        return payload.members;
      case 'app/removeMember':
        return dissoc(payload._id, state);
      default:
        return state;
    }
  } catch (e) {
    // ku.log('reducers.membersById', e, 'red');
  }

}

export const membersIds = (state = [], { type, payload }) => {
  switch (type) {
    case 'app/replaceMembers':
      // ku.log('membersIds.payload', payload, 'orange');
      return payload.ids;
    case 'app/insertMember':
      return prepend(payload._id, state);
    case 'app/removeMember':
      return dissoc(payload._id, state);
    default:
      return state;
  }
};

export const updateNewMemberId = (state = 'not-set', { type, payload }) => {
  switch (type) {
    case 'app/updateNewMemberId':
      // ku.log('reducers.newMemberId.payload', payload, 'orange');
      return payload.value;
    default:
      return state;
  }
};

export const techlogosById = ( state = {}, { type, payload }) => {
  switch (type) {
    case 'app/replaceTechlogos':
      // ku.log('techlogosById.payload', payload, 'green');
      return payload.techlogos;
    default:
      return state;
  }
}

export const techlogosIds = (state = [], { type, payload }) => {
  switch (type) {
    case 'app/replaceTechlogos':
      // ku.log('techlogosIds', payload, 'green');
      return payload.ids;
    default:
      return state;
  }
};

export const sponsorsById = ( state = {}, { type, payload }) => {
  switch (type) {
    case 'app/replaceSponsors':
      // ku.log('sponsorsById.payload', payload, 'green');
      return payload.sponsors;
    default:
      return state;
  }
}

export const sponsorsIds = (state = [], { type, payload }) => {
  switch (type) {
    case 'app/replaceSponsors':
      // ku.log('sponsorsIds', payload, 'green');
      return payload.ids;
    default:
      return state;
  }
};


export const showManageMembers = (state = 'no-show', { type, payload }) => {

  switch (type) {
    case 'app/updateShowManageMembers':
      // ku.log('reducers.showManageMembers: payload', payload, 'orange');
      return payload;
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

  techlogos: combineReducers({
    techlogosById,
    techlogosIds,
  }),

  navButtons: combineReducers({
    navButtonsById,
    navButtonsIds,
  }),

  sponsors: combineReducers({
    sponsorsById,
    sponsorsIds,
  }),
  ui: combineReducers({
    updateNewMemberId,
    showManageMembers,
  }),
  requests,
})
